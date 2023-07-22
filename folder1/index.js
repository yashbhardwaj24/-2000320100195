const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

async function fetchData(url) {
	try {
		const res = await axios.get(url, { timeout: 500 });
		return res.data.numbers;
	} catch (error) {
		return [];
	}
}

app.get('/numbers', async (req, res) => {
	try {
		const urls = req.query.url;
		const urlArr = Array.isArray(urls) ? urls : [urls];

		const listUrl = urlArr.map((url) => fetchData(url));

		const Arrs = await Promise.allSettled(listUrl);

		const output = [];
		Arrs.forEach((item) => {
			if (item.status === 'fulfilled') {
				output.push(...item.value);
			}
		});

		output.sort((a, b) => a - b); 

		const result = [];
		for (let i = 0; i < output.length; i++) {
			if (i === 0 || output[i] !== output[i - 1]) {
				result.push(output[i]);
			}
		}

		res.json({ numbers: result });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Internal Server Error',
			message: error,
		});
	}
});

const port = 8008;
app.listen(port, () => console.log(`http:127.0.0.1:${port}`));
