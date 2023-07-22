import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrainCard from "../components/TrainCard";

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios
      .get(`http://20.244.56.144/train/trains/${trainNumber}`)
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
