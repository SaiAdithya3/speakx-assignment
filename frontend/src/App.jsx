import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import { toast, Toaster } from 'sonner';
import axios from 'axios';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location, navigate]);

  useEffect(() => {
    const startServer = async () => {
      const promise = axios.get('http://localhost:5000/');

      toast.promise(
        promise,
        {
          loading: 'Starting server...',
          success: 'Server started successfully!',
          error: 'Failed to start server'
        }
      );

      try {
        const response = await promise;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    startServer();
  }, []);

  return (
    <>
      <div className={` w-full flex px-20 items-center justify-center ${isLoginPage ? 'justify-center' : ''}`}>
        <div className="max-w-[1400px] w-full flex items-start justify-center">

          {!isLoginPage && (
            <div className="sticky top-0 left-0 hidden justify-end md:flex w-[25%]">
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
            <div className="sticky top-0 right-0 hidden md:flex w-[30%]">
              <RightSidebar />
            </div>
          )}
        </div>

      </div>
      <Toaster position='top-right' richColors />
    </>
  );
};

export default App;
