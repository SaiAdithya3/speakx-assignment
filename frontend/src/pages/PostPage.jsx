import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import PostDetailCard from '../components/PostDetail/PostDetailCard';
import axios from 'axios';

const PostPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { tweetid } = useParams();
  console.log(tweetid);
  useEffect(() => {
    const fetchPosts = async (postId) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${tweetid}`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts(tweetid);
  }, [tweetid]);

  return (
    <>
      <div className="flex flex-col items-start w-full justify-between">
        <div className="w-full sticky top-0 flex items-center justify-center">
          <div className="w-full border-b border-zinc-500/30 flex bg-black/60 backdrop-blur-md text-white z-10">
            <div className={`w-full flex gap-7 py-4 px-6 items-center cursor-pointer `}>
              <FaArrowLeft onClick={() => navigate('/')} />
              <h1 className='text-md text-center font-semibold'>Post</h1>
            </div>
          </div>
        </div>

        {post && <PostDetailCard post={post} />} 
      </div>
    </>
  )
}

export default PostPage;
