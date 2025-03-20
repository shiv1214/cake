import React from "react";
import BudgetChart from "../components/BudgetChart";
const DashBoard = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-primary">Dashboard</h2>
      <p className="text-secondary">Here you can track your expenses and budget.</p>
      <BudgetChart />
    </div>
  );
};
export default DashBoard;
