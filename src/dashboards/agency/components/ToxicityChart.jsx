import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ToxicityChart = ({ data, title }) => {
  const chartData = data.map((value, index) => ({ day: index + 1, value }));

  return (
    <div className="bg-card rounded-lg p-4 border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "none", borderRadius: "8px" }}
            labelStyle={{ color: "#F9FAFB" }}
          />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ToxicityChart;
