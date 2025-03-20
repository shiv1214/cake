import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Signup from "./pages/signup";
const App = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
