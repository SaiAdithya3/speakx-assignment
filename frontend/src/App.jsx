import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import { Toaster } from 'sonner';

const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <div className={`w-full flex px-20 items-start justify-between ${isLoginPage ? 'justify-center' : ''}`}>
        {!isLoginPage && (
          <div className="sticky top-0 left-0 w-[25%]">
            <Sidebar />
          </div>
        )}
        <div className={`${isLoginPage ? 'w-[100%]' : 'w-[45%]'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/:username/post/:tweetid" element={<PostPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        {!isLoginPage && (
          <div className="sticky top-0 right-0 w-[30%]">
            <RightSidebar />
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default App;
