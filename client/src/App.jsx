import { useState } from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import CarOwners from "./components/CarOwners";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Vehicles from "./components/Vehicles";
import NewVehicle from "./components/NewVehicle";
import LinkToOwner from "./components/LinkToOwner";
import NewCarOwner from "./components/NewCarOwner";
import toast from "react-hot-toast";

function App() {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to access this page", {
        duration: 3000,
      });
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/owners"
          element={
            <PrivateRoute>
              <CarOwners />
            </PrivateRoute>
          }
        />
        <Route
          path="/vehicles"
          element={
            <PrivateRoute>
              <Vehicles />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-vehicle"
          element={
            <PrivateRoute>
              <NewVehicle />
            </PrivateRoute>
          }
        />
        <Route
          path="/link-vehicle"
          element={
            <PrivateRoute>
              <LinkToOwner />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-owner"
          element={
            <PrivateRoute>
              <NewCarOwner />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
