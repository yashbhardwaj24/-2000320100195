import React, { useState } from "react";

const TrainForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      let url = `http://20.244.56.144/train/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let data = await response.json();
      if(!data) alert('inserted data')
    } catch (error) {
      console.log("error 🐹 :" + error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Owner Name:
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Roll No:
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Owner Email:
        <input
          type="email"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Access Code:
        <input
          type="text"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrainForm;

// {
//   "companyName": "Train Central",
//   "ownerName": "Ram",
//   "rollNo": "10",
//   "ownerEmail": "ram@abc.edu",
//   "accessCode": "qxrwbC"
// }
