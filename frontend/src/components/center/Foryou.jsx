import React, { useState, useEffect } from 'react';
import TweetCard from './TweetCard';
import axios from 'axios';

const Foryou = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://speakx-assignment-pj4w.onrender.com/api/posts/allposts'); 
        const sortedTweets = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); 
        setTweets(sortedTweets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="w-full flex items-center flex-col">
        <h1 className='text-sm text-sky-500 border-b border-zinc-700 w-full flex justify-center py-3 hover:bg-zinc-900 cursor-pointer'>Show {tweets.length} posts</h1>
        {tweets.map((tweet) => (
          <TweetCard key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </>
  )
}

export default Foryou;
