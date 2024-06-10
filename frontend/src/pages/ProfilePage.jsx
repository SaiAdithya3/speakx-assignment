import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import PostDetailCard from '../components/PostDetail/PostDetailCard';
import { useNavigate } from 'react-router-dom';
import verified from '../assets/verified.png';
import ProfileDetail from '../components/Profile/ProfileDetail';

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-start w-full justify-between">
        <div className="w-full sticky top-0 flex items-center justify-center">
          <div className="w-full border-b border-zinc-500/30 flex bg-black/60 backdrop-blur-md text-white z-10">
            <div className={`w-full flex gap-7 py-2 px-6 items-center cursor-pointer `}>
              <FaArrowLeft onClick={() => navigate('/')} />
              <div className="flex flex-col items-start">
                <h1 className='text-md font-semibold flex items-center gap-1'>Elon Musk <img src={verified} className='w-4 h-4' /></h1>
                <h1 className='text-xs text-zinc-600'>500 posts</h1>
              </div>
            </div>
          </div>
        </div>


        {/* <PostDetailCard /> */}
        <ProfileDetail />
      </div>
    </>
  )
}

export default ProfilePage