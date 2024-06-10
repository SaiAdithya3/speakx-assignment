import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <div className="w-full flex m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App