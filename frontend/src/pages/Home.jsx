import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';

const Home = () => {
  return (
    <>
      <div className="flex items-center w-full">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-">
          <h1 className="text-3xl text-center">Home</h1>
        </div>
        <div className="w-[25%]">
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default Home