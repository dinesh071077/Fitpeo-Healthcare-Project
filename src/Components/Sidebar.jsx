
import React from 'react';
import {
  FaTimes, FaThLarge, FaSort , FaCalendarAlt, FaPlus ,
  FaChartBar, FaComments,  FaPhone, FaCog
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed md:static top-0 left-0 w-64 bg-white shadow-md p-4 z-50 transition-transform duration-300 h-screen overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      
      <div className="flex justify-between items-center mb-6 md:hidden">
        <div className="flex items-center gap-2">
        
          <h2 className="text-2xl font-bold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 font-bold">Health</span>

            <span className="text-black">care</span>
          </h2>
        </div>
        <button onClick={toggleSidebar}>
          <FaTimes className="text-gray-600 text-xl" />
        </button>
      </div>

    
      <div className="hidden md:flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 font-bold ">Health</span>

         <span className="text-indigo-900 font-bold">care.</span>


        </h2>
      </div>

    
      <div className="space-y-8">
       
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase mb-3">General</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              < FaThLarge className="text-gray-600" />
             <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaSort  className="text-gray-600" />
              <span>History</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaCalendarAlt className="text-gray-600" />
             <span>Calendar</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaPlus className="text-gray-600" />
              <span>Appointments</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaChartBar className="text-gray-600" />
              <span>Statistics</span>
            </li>
          </ul>
        </div>

       
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase mb-3">Tools</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaComments className="text-gray-600" />
              <span>Chat</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
             <FaPhone className="text-gray-600" />
              <span>Support</span>
            </li>
          </ul>
        </div>

        
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase mt-30 mb-2"></p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
              <FaCog className="text-gray-600" />
              <span>Setting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
