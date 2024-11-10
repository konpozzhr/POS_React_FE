import React from 'react';

const customers = [
  { id: 1, name: 'Kriss Hamsworth', totalOrder: 14889.74 },
  { id: 2, name: 'Henry Cabil', totalOrder: 9691.15 },
  { id: 3, name: 'Jane Smith', totalOrder: 4485.20 },
  { id: 4, name: 'Alice Johnson', totalOrder: 3728.45 },
  { id: 5, name: 'Danyelle Lundy', totalOrder: 5291.60 },
];

const TopCustomers = () => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Top Customers</h2>
        <button className="text-blue-500 text-sm font-medium hover:underline">View All</button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-2">SL</th>
            <th className="py-2">Name</th>
            <th className="py-2">Total Order</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{customer.name}</td>
              <td className="py-2">${customer.totalOrder.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCustomers;
