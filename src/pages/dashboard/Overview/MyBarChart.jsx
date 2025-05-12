import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 200 },
  { name: 'Apr', uv: 278 },
  { name: 'May', uv: 189 },
];
// const data2 = [
//   { name1: '2006', uvx: 400 },
//   { name1: '2008', uvx: 300 },
//   { name1: '2010', uvx: 200 },
//   { name1: '2012', uvx: 278 },
//   { name1: '2014', uvx: 189 },
// ];

const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#00DEC3" />
      </BarChart>
      {/* <BarChart data={data2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name1" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uvx" fill="#00DEC3" />
      </BarChart> */}
    </ResponsiveContainer>
  );
};

export default MyBarChart;
