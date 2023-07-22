import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrainCard from "../components/TrainCard";

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch data for a single train using the trainNumber parameter and update the state
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for fetching a single train
    axios
      .get(`YOUR_API_ENDPOINT/${trainNumber}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [trainNumber]);

  return <div>{train ? <TrainCard train={train} /> : <p>Loading...</p>}</div>;
};

export default SingleTrainPage;
