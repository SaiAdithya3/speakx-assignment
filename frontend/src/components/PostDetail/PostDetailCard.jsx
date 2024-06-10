import React from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import verified from '../../assets/verified.png';
import { FaRegComment } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { GoBookmark } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import CreatePost from '../center/CreatePost';
import { Link } from 'react-router-dom'

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust this line to format the date as needed
};

const PostDetailCard = (props) => {
    const { post } = props;

    if (!post || !post.author) return <div>Loading...</div>;

    return (
        <>
            <div className="w-full flex items-start px-6 gap-4 py-4 border-b border-zinc-700">
                <div className="flex items-center flex-col justify-center w-full">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={post.author.profilePic || "https://avatar.iran.liara.run/public/boy?username=cocomelon"} alt="profile" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col items-start">
                                <Link to="/profile" className="hover:underline cursor-pointer text-sm font-semibold text-white flex items-center gap-1">{post.author.username} <img src={verified} className='w-4 h-4' /></Link>
                                <h2 className="text-xs text-gray-500">@{post.author.username}</h2>
                            </div>
                        </div>
                        <PiDotsThreeOutlineFill className='text-zinc-200' />
                    </div>

                    {/* tweet goes here */}
                    <div className="w-full py-4">
                        <p className="text-white text-sm">
                            {post.content}
                        </p>
                    </div>

                    <h2 className="text-xs w-full text-start pb-4 py-2 text-gray-500 flex items-center gap-1">
                        {formatTimestamp(post.createdAt)}
                        <span className='text-white'>500k</span>
                        views
                    </h2>

                    <div className="flex items-center border-y border-zinc-700 w-full justify-between py-1.5 px-2 text-gray-500">
                        <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                            <FaRegComment />
                            <h1 className='text-xs'>{post.comments.length}</h1>
                        </div>
                        <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                            <RxLoop />
                            <h1 className='text-xs'>{post.shares}</h1>
                        </div>
                        <div className="flex items-center gap-1 hover:text-pink-500 cursor-pointer">
                            <FaRegHeart />
                            <h1 className='text-xs'>{post.likes.length}</h1>
                        </div>
                        <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                            <GoBookmark />
                            <h1 className='text-xs'>{post.bookmarks}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiShare className='hover:text-sky-300 rounded-full hover:bg-sky-300/30 p-1.5 text-3xl transition-all cursor-pointer' />
                        </div>
                    </div>
                    {/* comments go here */}
                    <CreatePost mode="comment" />
                </div>
            </div>
        </>
    )
}

export default PostDetailCard;
