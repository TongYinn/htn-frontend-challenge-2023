import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

const App = () => {
  console.log("In App.js");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<HomePage />} />
    </Routes>
  );
};

export default App;
