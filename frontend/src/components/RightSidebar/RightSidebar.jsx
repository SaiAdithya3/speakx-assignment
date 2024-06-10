import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import Whotofollow from './Whotofollow';
import Whatshappening from './Whatshappening';
import SubscribeCard from './SubscribeCard';

const RightSidebar = () => {
    return (
        <>
            <div className="z-5 0 overflow-y-scroll no-scrollbar flxed right-0 top-0 bg-black h-screen justify-between flex flex-col pr-16 p-1 px-6 border-l border-zinc-700/90">
                <div className="w-full  p-2 flex items-center">
                    <div className="w-full flex items-center bg-zinc-800/70 rounded-full gap-2">
                        <IoSearchSharp className=' text-white p-2 text-4xl' />
                        <input type="text" placeholder="Search" className="w-full bg-transparent focus:outline-none text-white p-2" />
                    </div>
                </div>
                <div className="w-full py-3 flex flex-col items-center justify-center gap-4">
                    <SubscribeCard />
                    <Whatshappening />
                    <Whotofollow />
                </div>
            </div>
        </>
    )
}

export default RightSidebar