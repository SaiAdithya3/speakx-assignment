import React from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import verified from '../../assets/verified.png';
import { FaRegComment } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { GoBookmark } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { Link } from 'react-router-dom';

const TweetCard = (props) => {
  const { tweet } = props;


  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Link to={`/${tweet.author.username}/post/${tweet._id}`} className="w-full flex items-start px-6 gap-4 py-4 border-b border-zinc-700 hover:bg-zinc-900 cursor-pointer">
        <img src={tweet.author.profilePic} alt="profile" className="w-12 h-12 rounded-full" />
        <div className="flex items-center flex-col justify-center w-full">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-row items-center">
                <Link to="/profile" className="hover:underline cursor-pointer text-sm font-semibold text-white flex items-center gap-1">{tweet.author.username} <img src={verified} className='w-4 h-4' /></Link>
                <h2 className="text-xs text-gray-500 px-2">@{tweet.author.username} |</h2>
                <h2 className="text-xs text-gray-500">{formatTimestamp(tweet.createdAt)}</h2> {/* Display formatted timestamp */}
              </div>
            </div>
            <PiDotsThreeOutlineFill className='text-zinc-200' />
          </div>

          {/* tweet goes here */}
          <div className="w-full py-1.5">
            <p className="text-white text-sm">
              {tweet.content}
            </p>
          </div>

          <div className="flex items-center w-full justify-between py-3 text-gray-500">
            <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
              <FaRegComment />
              <h1 className='text-xs'>
                {tweet.comments.length}
              </h1>
            </div>
            <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
              <RxLoop />
              <h1 className='text-xs'>
                150
              </h1>
            </div>
            <div className="flex items-center gap-1 hover:text-pink-500 cursor-pointer">
              <FaRegHeart />
              <h1 className='text-xs'>
                {tweet.likes.length}
              </h1>
            </div>
            <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
              <SiSimpleanalytics />
              <h1 className='text-xs'>
                1.5k
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <GoBookmark className='hover:text-sky-300 rounded-full hover:bg-sky-300/30 p-1.5 text-3xl transition-all cursor-pointer' />
              <FiShare className='hover:text-sky-300 rounded-full hover:bg-sky-300/30 p-1.5 text-3xl transition-all cursor-pointer' />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default TweetCard;
