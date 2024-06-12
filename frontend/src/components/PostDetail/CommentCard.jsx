import React, { useState, useEffect } from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import verified from '../../assets/verified.png';
import { FaRegComment } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { GoBookmark } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import { useAuth } from '../../context/AuthContext';

const CommentCard = (props) => {
  const navigate = useNavigate();
  const { tweet } = props;
  console.log(tweet);
  //   const [likes, setLikes] = useState(tweet.likes.length);
  // console.log(tweet);
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  // const { currentUser } = useAuth();
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  // console.log(userId);

  const handleLike = async () => {
    // try {
    //   const response = await axios.post('https://speakx-assignment-pj4w.onrender.com/api/posts/like', { postId: tweet._id, userId: userId });
    //   setLikes(response.data.post.likes.length);
    //   // console.log(response.data.post.likes.length);
    //   // console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };


  return (
    <>
      <div className="w-full flex items-start px-6 gap-4 py-4 border-b border-zinc-700 hover:bg-zinc-900 cursor-pointer">
        <img src={tweet.author.profilePic} alt="profile" className="w-12 h-12 rounded-full" />
        <div className="flex items-center flex-col justify-center w-full">
          <Link to={`/${tweet.author.username}/post/${tweet._id}`} className='w-full'>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex flex-row items-center">
                  <Link to={`/profile/@${tweet.author.username}`} className="hover:underline cursor-pointer text-sm font-semibold text-white flex items-center gap-1">{tweet.author.username} <img src={verified} className='w-4 h-4' /></Link>
                  <h2 className="text-xs text-gray-500 px-2">@{tweet.author.username} |</h2>
                  <h2 className="text-xs text-gray-500">{formatTimestamp(tweet.createdAt)}</h2>
                </div>
              </div>
              <PiDotsThreeOutlineFill className='text-zinc-200' />
            </div>

            {/* tweet goes here */}
            <div className="w-full py-1.5 flex flex-col items-start gap-3">
              <p className="text-white text-sm">
                {tweet.content}
              </p>
              {tweet.imageUrls.length === 4 && (
                <div className="w-full flex flex-wrap items-center justify-between gap-2">
                  <img src={tweet.imageUrls[0]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                  <img src={tweet.imageUrls[1]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                  <img src={tweet.imageUrls[2]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                  <img src={tweet.imageUrls[3]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                </div>
              )}
              {tweet.imageUrls.length === 3 && (
                <div className="w-full flex items-center justify-between gap-2">
                  <img src={tweet.imageUrls[0]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                  <div className="w-[48%] gap-2">
                    <img src={tweet.imageUrls[1]} alt="tweet" className="w-[100%] h-full rounded-xl" />
                    <img src={tweet.imageUrls[2]} alt="tweet" className="w-[100%] h-full rounded-xl" />
                  </div>
                </div>
              )}
              {tweet.imageUrls.length === 2 && (
                <div className="w-full flex items-center justify-between gap-2">
                  <img src={tweet.imageUrls[0]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                  <img src={tweet.imageUrls[1]} alt="tweet" className="w-[48%] h-full rounded-xl" />
                </div>
              )}
              {tweet.imageUrls.length === 1 && (
                <div className="w-full flex items-center justify-between gap-2">
                  <img src={tweet.imageUrls[0]} alt="tweet" className="w-[80%] h-full rounded-xl" />
                  {/* <img src={tweet.imageUrls[2]} alt="tweet" className="w-[48%] h-full rounded-xl" /> */}
                </div>
              )}
              {/* <img src={tweet.imageUrls[0]} alt="tweet" className="w-[80%] h-full rounded-xl" /> */}
            </div>
          </Link>

          <div className="flex items-center w-full justify-between py-3 text-gray-500">
            <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer" onClick={() => navigate(`/${tweet.author.username}/post/${tweet._id}`)}>
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
            <div className="flex items-center gap-1 hover:text-pink-500 hover:fill-pink-500 cursor-pointer" onClick={handleLike}>
              <FaRegHeart />
              <h1 className='text-xs'>
                {/* {likes} */}
                {tweet.likes.length}
              </h1>
            </div>
            <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
              <GoBookmark className='hover:text-sky-300 rounded-full hover:bg-sky-300/30 p-1.5 text-3xl transition-all cursor-pointer' />
            </div>
            <div className="flex items-center gap-2">
              <FiShare className='hover:text-sky-300 rounded-full hover:bg-sky-300/30 p-1.5 text-3xl transition-all cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentCard;
