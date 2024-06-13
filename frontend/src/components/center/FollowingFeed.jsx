import React, { useState, useEffect } from 'react';
import TweetCard from './TweetCard'; // Ensure TweetCard is properly imported
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const FollowingFeed = () => {
  const { user } = useAuth(); // Ensure we get the user from the useAuth hook
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchFollowingPosts = async () => {
      try {
        const response = await axios.post('https://speakx-assignment-pj4w.onrender.com/api/posts/getfollowingposts', {
          userId: user._id
        });
        setTweets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchFollowingPosts();
    }
  }, [user]); // Add user to the dependency array

  return (
    <div className="w-full flex items-center flex-col">
      <h1 className='text-lg font-semibold py-4'>Following Feed</h1>
      {tweets.map(tweet => (
        <TweetCard key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default FollowingFeed;
