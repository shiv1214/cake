import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
const data = [
  { name: "Rent", value: 500 },
  { name: "Groceries", value: 300 },
  { name: "Transport", value: 150 },
  { name: "Entertainment", value: 200 },
];
const COLORS = ["#4F46E5", "#EC4899", "#10B981", "#F59E0B"];
const BudgetChart = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold text-primary mb-4">Budget Breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};
export default BudgetChart;
