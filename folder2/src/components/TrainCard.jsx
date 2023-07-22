import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const TrainCard = ({ train }) => {
  const {
    trainName,
    trainNumber,
    departureTime,
    seatsAvailable,
    price,
    delayedBy,
  } = train;

  return (
    <Card sx={{ minWidth: 275, margin: "10px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {trainName} (Train Number: {trainNumber})
        </Typography>
        <Typography sx={{ marginBottom: 1.5 }} color="text.secondary">
          Departure Time: {departureTime.Hours}:{departureTime.Minutes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Seats Available: Sleeper: {seatsAvailable.sleeper}, AC:{" "}
          {seatsAvailable.AC}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: Sleeper: {price.sleeper}, AC: {price.AC}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Delayed By: {delayedBy} minutes
        </Typography>
        <Button
          component={Link}
          to={`/trains/${trainNumber}`}
          variant="contained"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
