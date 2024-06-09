import React from 'react';
import Sticky from 'react-stickynode';
import CreatePost from './CreatePost';

const Center = () => {
    return (
        <div className="bg-black w-full flex items-center flex-col">
            <div className="w-full fixed top-0 flex items-center justify-center">
                <div className="w-[40%] pt-4 border-b border-zinc-500/50 flex bg-black/60 backdrop-blur-md text-white z-10">
                    <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
                        <h1 className='text-sm text-center'>For you</h1>
                        <span className="w-1/5 h-0.5 bg-[#1d9bf0]"></span>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
                        <h1 className='text-sm text-center'>Following</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center">
                <CreatePost />
            </div>
        </div>
    )
}

export default Center;
