// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-100 h-screen p-4 ">
//       <div className="text-xl font-bold mb-4">Menu</div>
//       <ul>
//         <li className="mb-2 p-2 hover:bg-gray-200 rounded border-separate">Dashboard</li>
//         <li className="mb-2 p-2 hover:bg-gray-200 rounded">Products</li>
//         {/* Add more items as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { HomeIcon, ClipboardDocumentListIcon, ChartBarSquareIcon, CurrencyDollarIcon, UserIcon, Cog8ToothIcon, CubeTransparentIcon, GlobeAmericasIcon, ShoppingBagIcon, BanknotesIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 border-r border-gray-300">
      <div className="text-xl font-bold mb-4">Menu</div>
      <ul className="space-y-2">
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <HomeIcon className="w-5 h-5 mr-3 text-blue-500" />
          <span className="text-gray-700">Dashboard</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <ClipboardDocumentListIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Products</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <ChartBarSquareIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Trading</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <CurrencyDollarIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Expense</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <UserIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">People</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <Cog8ToothIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">User Management</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <CubeTransparentIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Categories</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <GlobeAmericasIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Countries</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <ShoppingBagIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Types</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <BanknotesIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Taxes</span>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded">
          <AdjustmentsHorizontalIcon className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-gray-700">Variants</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
