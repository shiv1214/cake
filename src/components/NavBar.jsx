import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Budget Assistant</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/dashboard" className="hover:text-accent">Dashboard</Link>
          <Link to="/settings" className="hover:text-accent">Settings</Link>
          <Link to="/login" className="hover:text-accent">Login</Link>
          <Link to="/signup" className="hover:text-accent">Sign Up</Link>
          
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
