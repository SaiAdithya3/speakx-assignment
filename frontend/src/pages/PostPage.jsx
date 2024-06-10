import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
// import TweetCard from '../components/center/TweetCard';
import PostDetailCard from '../components/PostDetail/PostDetailCard';

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-start w-full justify-between">
        <div className="w-full sticky top-0 flex items-center justify-center">
          <div className="w-full border-b border-zinc-500/30 flex bg-black/60 backdrop-blur-md text-white z-10">
            <div className={`w-full flex gap-7 py-4 px-6 items-center cursor-pointer `}>
              <FaArrowLeft onClick={()=>navigate('/')}/>
              <h1 className='text-md text-center font-semibold'>Post</h1>
            </div>
          </div>
        </div>


        <PostDetailCard />
      </div>
    </>
  )
}

export default PostPage