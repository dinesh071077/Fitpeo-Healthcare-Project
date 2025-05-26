

import React from 'react';
import { FaBars, FaBell, FaCalendarAlt, FaPlus } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full md:w-[calc(100%-16rem)] md:ml-64 bg-white shadow-sm p-4 flex items-center justify-between z-30">

     
      <div className="flex items-center gap-4 flex-1">
       
        <button
          onClick={toggleSidebar}
          className="block md:hidden text-gray-600 text-xl"
        >
          <FaBars />
        </button>

        
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block w-full max-w-sm px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <FaBell className="text-indigo-900 text-xl cursor-pointer hidden md:block" />
      </div>

      
      <div className="flex items-center gap-4 ml-4">
      <FaCalendarAlt className="text-cyan-400 text-xl cursor-pointer" />
        <FaPlus className="text-indigo-900 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
