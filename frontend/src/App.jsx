import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <div className="w-full flex px-20 items-start justify-between">
        <div className="sticky top-0 left-0 w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[45%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <div className="sticky top-0 right-0 w-[30%]">
          <RightSidebar />
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default App;
