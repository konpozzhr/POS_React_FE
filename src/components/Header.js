// import React from 'react';

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow">
//       <div className="text-2xl font-bold">INVENTUAL</div>
//       <div className="flex items-center space-x-4">
//         <div className="text-sm">Testing user</div>
//         <div className="bg-gray-300 rounded-full h-8 w-8"></div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow bg-green-400 rounded-md">
      <div className="text-2xl font-bold">POS SYSTEM</div>
      <div className="relative">
        {/* Profile section */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleDropdown}>
          <div className="bg-gray-300 rounded-full h-10 w-10"></div> {/* Replace with actual image if available */}
          <div className="flex flex-col items-start">
            <div className="text-sm font-semibold text-gray-800">Testing user </div>
            <div className="text-xs text-gray-500">Super Admin</div>
          </div>
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10">
            <div className="py-2">
              <button
                onClick={() => console.log("Navigate to Profile")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => console.log("Log Out")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


