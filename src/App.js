import React from "react";
import App02 from "./Pages/ExpenseTracker/App02";
import App01 from "./Pages/Calculator/App01";
import Home from "./Pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/App01" element={<App01/>}/>
      <Route path="/App02" element={<App02/>}/>
    </Routes>
    </>
  );
};

export default App;
