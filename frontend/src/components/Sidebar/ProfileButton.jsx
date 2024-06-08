import React from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";


const ProfileButton = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-zinc-800 transition-all ease-in rounded-full">
        <div className="flex items-center gap-2">
          <span className='w-7 h-7 bg-blue-500 rounded-full'></span>
          <div className="flex flex-col items-start">
            <p className='text-white text-md font-semibold'>Eren Jeager</p>
            <p className='text-zinc-300 text-xs'>@Vladmirputin</p>
          </div>
        </div>
        <PiDotsThreeOutlineFill className='text-white' />

      </div>
    </>
  )
}

export default ProfileButton