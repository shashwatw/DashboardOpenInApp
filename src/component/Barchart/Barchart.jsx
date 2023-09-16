import React from "react";
import "./Barchart.css";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  { name: "Sales", value: 400, price: 980 },
  { name: "marketing", value: 700, price: 100 },
  { name: "Business", value: 200, price: 520 },
  { name: "Transactions", value: 1000, price: 826 },
];

const Barchart = ({ props }) => {
  return (
    <div className="barChartBox">
      <div className="chart">
        <h3 style={{ marginBottom: "10px" }}>Activities</h3>
        <ResponsiveContainer width="99%" height={200}>
          <BarChart width={600} height={700} data={data}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey="value" fill="rgba(152, 216, 158, 1)" barSize={30} />
            <Bar dataKey="price" fill="rgba(238, 132, 132, 1)" barSize={30} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
