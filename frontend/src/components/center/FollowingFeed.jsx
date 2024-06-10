import React from 'react';
import TweetCard from './TweetCard';

const FollowingFeed = () => {
  return (
    <>
        <div className="w-full flex items-center flex-col">
            <h1 className='text-lg font-semibold'>Following Feed</h1>
            <TweetCard />
        </div>
    </>
  )
}

export default FollowingFeed