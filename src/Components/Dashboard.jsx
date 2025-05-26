
import React from 'react';
import { FaTooth, FaBone, FaLungs, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-6">
          
          <div className="flex flex-col md:flex-row gap-6">
          
            <div className="flex-1 bg-white rounded-2xl p-4 shadow">
              <img
                src="src/assets/human body.jpg"
                alt="Human Model"
                className="w-full h-auto object-contain max-h-72"
              />
            </div>

           
    <div className="flex flex-col gap-4 flex-1">
    <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-2">
             <div className="flex items-center gap-4">
                <FaLungs className="text-red-500 text-2xl" />
               <div className="flex-1">
                 <p className="font-bold text-gray-700">Lungs</p>
                 <p className="text-sm text-gray-500">Last Check: 26 Oct 2021</p>
              </div>
                <span className=" text-block-900 text-xs font-semibold px-2 py-1 rounded">Strong</span>
            </div>
        <div className="w-full bg-gray-200 rounded-full h-2">

            <div className="bg-red-900 h-2 rounded-full" style={{ width: '85%' }}></div>

        </div>
  </div>

 
  <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-2">
    <div className="flex items-center gap-4">
      <FaTooth className="text-green-500 text-2xl" />
      <div className="flex-1">
        <p className="font-bold text-gray-700">Teeth</p>
        <p className="text-sm text-gray-500">Last Check: 26 Oct 2021</p>
      </div>
      <span className=" text-block-900 text-xs font-semibold px-2 py-1 rounded">Moderate</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
    </div>
  </div>

 
  <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-2">
    <div className="flex items-center gap-4">
      <FaBone className="text-orange-500 text-2xl" />
      <div className="flex-1">
        <p className="font-bold text-gray-700">Bone</p>
        <p className="text-sm text-gray-500">Last Check: 26 Oct 2021</p>
      </div>
      <span className=" text-block-700 text-xs font-semibold px-2 py-1 rounded">Weak</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
    </div>
  </div>
</div>

          </div>

        
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Activity</h3>
            <img
              src="src/assets/chart.jpg"
              alt="Health Chart"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">October 2021</h3>

          <div className="grid grid-cols-7 gap-2 text-sm text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="text-gray-500">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`py-2 rounded-lg ${i === 25 ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-700">Upcoming Schedule</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
                <FaCalendarAlt /> Dentist - 09:00 AM
              </div>
              <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm">
                <FaHeartbeat /> Physiotherapy - 11:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
