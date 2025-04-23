// AppointmentFeeChart.js
import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF5A5F",
  "#00ADB5",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AppointmentFeeChart = ({ appointments }) => {
  const chartData = appointments.map((item) => ({
    name: item.doctorName,
    fee: parseInt(item.fee),
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 text-center">
      <h2 className="text-xl font-bold mb-4">Appointment Fees Overview</h2>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="fee" shape={<TriangleBar />} label={{ position: "top" }}>
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AppointmentFeeChart;
