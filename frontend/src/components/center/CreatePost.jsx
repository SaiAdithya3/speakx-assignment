import React, { useState } from 'react';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineGif } from "react-icons/hi2";
import { GoImage } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { useAuth } from '../../context/AuthContext';

const CreatePost = () => {
    const [postContent, setPostContent] = useState('');
    const { user } = useAuth();

    const handlePostChange = (e) => {
        setPostContent(e.target.value);
    };

    const isPostEmpty = postContent.trim().length === 0;

    return (
        <div className="w-full flex p-4 border-b border-zinc-500/50">
            {/* <span className="w-12 h-10 mr-4 rounded-full bg-pink-400"> </span> */}
            <img src={user && user.profilePic} alt="logo" className='w-12 h-12 mr-4 rounded-full' />
            <div className="flex flex-col w-full">
                <textarea
                    className="w-full h-12 p-2 bg-transparent focus:border-b border-zinc-500 resize-none focus:outline-none"
                    placeholder="What's happening?"
                    value={postContent}
                    onChange={handlePostChange}
                ></textarea>
                <div className="flex justify-between items-center pt-2 mt-2">
                    <div className="flex text-xl space-x-4 text-[#1d9bf0]">
                        <button className="focus:outline-none">
                            <GoImage />
                        </button>
                        <button className="focus:outline-none">
                            <MdOutlineEmojiEmotions />
                        </button>
                        <button className="focus:outline-none">
                            <HiOutlineGif />
                        </button>
                        <button className="focus:outline-none">
                            <LuListTodo />
                        </button>
                        <button className="focus:outline-none">
                            <MdLocationPin />
                        </button>
                    </div>
                    <button 
                        className={`font-semibold text-sm text-white rounded-full px-4 py-2 focus:outline-none ${isPostEmpty ? 'bg-[#1d9bf0]/50 cursor-not-allowed' : 'bg-[#1d9bf0] hover:bg-blue-600'}`}
                        disabled={isPostEmpty}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
