import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', profit: 0, loss: 0 },
  { month: 'Feb', profit: 0, loss: 0 },
  { month: 'Mar', profit: 0, loss: 0 },
  { month: 'Apr', profit: 2670.8, loss: 0 },
  { month: 'May', profit: 0, loss: 872.65 },
  { month: 'Jun', profit: 1277.8, loss: 0 },
  { month: 'Jul', profit: 0, loss: 0 },
  { month: 'Aug', profit: 4116.75, loss: 0 },
  { month: 'Sep', profit: 0, loss: 0 },
  { month: 'Oct', profit: 5941.73, loss: 31895.94 },
  { month: 'Nov', profit: 0, loss: 0 },
  { month: 'Dec', profit: 0, loss: 0 },
];

const ProfitLossOverview = () => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Profit & Loss Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#4CAF50" activeDot={{ r: 8 }} name="Profit" />
          <Line type="monotone" dataKey="loss" stroke="#2196F3" name="Loss" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitLossOverview;
