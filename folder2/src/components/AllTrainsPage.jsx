import React, { useEffect, useState } from "react";
import axios from "axios";
import TrainCard from "../components/TrainCard";

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    let url = ""
    axios
      .get("YOUR_API_ENDPOINT")
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
