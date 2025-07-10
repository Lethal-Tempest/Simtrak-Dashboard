import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex gap-6 p-6 min-h-screen bg-[#f5f7fa]">
      <div className="w-3/4 flex flex-col gap-6">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome,</h2>
          <p className="text-3xl font-bold text-[#0b12b8] mt-2">Daksh Arora</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-700">Adore</h3>
            <p className="text-sm text-gray-500 mt-1">Task Management System</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-700">Powered By</h3>
            <p className="text-sm text-gray-500 mt-1">Simtrak</p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 p-5 rounded-xl shadow-inner">
            <h3 className="text-lg font-semibold text-blue-700">Today's Focus</h3>
            <p className="text-sm text-gray-600 mt-1">Complete all urgent tasks</p>
          </div>
        </div>
      </div>

      <div className="w-1/4 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-700">Quick Stats</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✅ 12 Tasks Completed</li>
            <li>⏳ 3 In Progress</li>
            <li>🛑 1 Blocked</li>
          </ul>
        </div>

        <div className="bg-[#0b12b8] text-white p-6 rounded-2xl shadow-md">
          <h4 className="text-lg font-semibold">Tip of the Day</h4>
          <p className="mt-2 text-sm">Stay focused for 25 minutes, then take a short 5-min break.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
