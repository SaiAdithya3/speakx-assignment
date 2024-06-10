import React from 'react';
import TweetCard from '../center/TweetCard';

const ProfilePosts = () => {
  return (
    <>
        <div className="w-full flex flex-col">
            <TweetCard />
            <TweetCard />
            <TweetCard />
        </div>
    </>
  )
}

export default ProfilePosts