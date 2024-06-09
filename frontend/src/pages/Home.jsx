import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Center from '../components/center/Center';

const Home = () => {
  return (
    <>
      <div className="flex items-center w-full justify-between">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[40%]">
          <Center />
        </div>
        <div className="w-[35%]">
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default Home