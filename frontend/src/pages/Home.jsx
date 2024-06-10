import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Center from '../components/center/Center';

const Home = () => {
  return (
    <>
      <div className="flex items-start w-full justify-between">
        <div className="sticky top-0 left-0 w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[45%]">
          <Center />
        </div>
        <div className="sticky top-0 right-0 w-[30%]">
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default Home