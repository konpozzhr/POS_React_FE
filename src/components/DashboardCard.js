// import React from 'react';

// const DashboardCard = ({ title, value, icon, color }) => {
//   return (
//     <div className="bg-white p-4 rounded shadow-md flex items-center">
//       <div className={`text-3xl ${color} p-2 rounded-full mr-4`}>{icon}</div>
//       <div>
//         <div className="text-sm text-gray-600">{title}</div>
//         <div className="text-xl font-bold">{value}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;

import React from 'react';

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className={`p-4 rounded-full mb-4 ${color} bg-opacity-10`}>
        <span className={`text-4xl ${color}`}>{icon}</span>
      </div>
      <div className="text-gray-600 font-medium text-sm">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
};

export default DashboardCard;
