import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-[#ebebeb] flex'>
      <Navbar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
