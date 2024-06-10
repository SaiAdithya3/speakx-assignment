import React from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useAuth } from '../../context/AuthContext';

const ProfileButton = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="w-full flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-zinc-800 transition-all ease-in rounded-full">
        <div className="flex items-center gap-2">
          {/* <span className='w-7 h-7 bg-blue-500 rounded-full'></span> */}
          <img src={user && user.profilePic} alt="logo" className='w-10 h-10 rounded-full' />
          <div className="flex flex-col items-start">
            <p className='text-white text-md font-semibold'>{user && user.username}</p>
            <p className='text-zinc-300 text-xs'>@{ user && user.email}</p>
          </div>
        </div>
        <PiDotsThreeOutlineFill className='text-white' />

      </div>
    </>
  )
}

export default ProfileButton