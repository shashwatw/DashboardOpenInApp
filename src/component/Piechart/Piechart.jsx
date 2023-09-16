import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./Piechart.css";

const data = [
  { name: "Category A", value: 10 },
  { name: "Category B", value: 15 },
  { name: "Category C", value: 8 },
  { name: "Category D", value: 20 },
  { name: "Category E", value: 12 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const PieChartComponent = () => {
  return (
    <div className="piechartbox">
      <h3>Top products</h3>
      <ResponsiveContainer width="99%" height={150}>
        <PieChart width={50} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
