import { Navigate } from "react-router-dom";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CarOwners from "./components/CarOwners";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Vehicles from "./components/Vehicles";
import NewVehicle from "./components/NewVehicle";
import LinkToOwner from "./components/LinkToOwner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owners" element={<CarOwners />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/new-vehicle" element={<NewVehicle />} />
        <Route path="/link-vehicle" element={<LinkToOwner />} />
      </Routes>
    </Router>
  );
}

export default App;
