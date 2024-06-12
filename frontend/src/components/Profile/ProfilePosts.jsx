import React, { useState, useEffect } from 'react';
import TweetCard from '../center/TweetCard';
import axios from 'axios';
import { toast } from 'sonner'

const ProfilePosts = (props) => {
  const { userId } = props;
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts/postsbyuser/' + userId);
        const sortedTweets = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTweets(sortedTweets);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col">
        {tweets && tweets.map((tweet) => (
          <TweetCard key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </>
  )
}

export default ProfilePosts