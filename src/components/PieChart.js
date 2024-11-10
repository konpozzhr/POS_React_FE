// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChart = () => {
//   const data = {
//     labels: ['Purchase', 'Sales', 'Expense', 'Gross Profit'],
//     datasets: [
//       {
//         data: [14.1, 50.0, 34.9, 10.0],
//         backgroundColor: ['#1D4ED8', '#22C55E', '#EF4444', '#F59E0B'],
//       },
//     ],
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow-md">
//       <Pie data={data} />
//     </div>
//   );
// };

// export default PieChart;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Purchase', 'Sales', 'Expense', 'Gross Profit'],
    datasets: [
      {
        data: [14.1, 50.0, 34.9, 10.0],
        backgroundColor: ['#1D4ED8', '#22C55E', '#EF4444', '#F59E0B'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

