import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  TrainCard,
  AllTrainsPage,
  SingleTrainPage,
  TrainForm,
} from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/trains/:trainNumber" element={<SingleTrainPage />} />
        <Route path="/trains/register" element={<TrainForm />} />
      </Routes>
    </>
  );
};

export default App;
