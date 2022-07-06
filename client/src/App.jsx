import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CarOwners from "./components/CarOwners";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owners" element={<CarOwners />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
}

export default App;
