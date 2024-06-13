import React, { useState } from 'react';
import axios from 'axios';
import AuthModal from '../components/Login/AuthModal';
import Signup from '../components/Login/Signup';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://speakx-assignment-pj4w.onrender.com/api/auth/login', loginData);
      console.log(response.data);
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success('Logged in successfully!');
      navigate('/');
      setShowLoginModal(false);
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
    }
  };

  return (
    <>
      <div className="w-full bg-black flex gap-5 h-screen items-center justify-center">
        <div className="w-1/2 flex items-center justify-center p-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="logo" className='w-[90%]' />
        </div>
        <div className="w-1/2 flex items-start justify-center flex-col gap-3">
          <h1 className='text-6xl font-bold pb-12 text-white'>Happening now</h1>
          <h1 className='text-3xl font-bold pb-4 text-white'>
            Join X today.
          </h1>
          <button className='bg-white text-black p-2 rounded-full w-[45%] flex items-center justify-center gap-2'>
            <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="google" className='w-5 h-5' />
            Sign in with Google</button>
          <button className='bg-white text-black p-2 rounded-full w-[45%] flex items-center justify-center gap-2'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png" alt="apple" className='w-5' />
            Sign in with Apple</button>
          <div className="flex w-[45%] items-center gap-1">
            <hr className='w-1/2' />
            <p className='text-white text-sm'>or</p>
            <hr className='w-1/2' />
          </div>
          <button
            className='bg-blue-400 text-white p-2 rounded-full w-[45%]'
            onClick={() => setShowSignupModal(true)}
          >
            Create Account
          </button>
          <p className='text-xs w-[45%] text-white'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
          <p className='text-white font-semibold pt-10 '>Already have an account?</p>
          <button
            className='bg-black text-blue-400 border border-white p-2 rounded-full w-[45%]'
            onClick={() => setShowLoginModal(true)}
          >
            Sign in
          </button>
        </div>
      </div>

      <AuthModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <h2 className="text-2xl font-bold mb-4">Log in</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
          />
          <button type="submit" className="w-full bg-[#1d9bf0] text-white p-2 rounded-lg">
            Log in
          </button>
        </form>
      </AuthModal>

      <AuthModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)}>
        <Signup />
      </AuthModal>
    </>
  );
};

export default Login;
