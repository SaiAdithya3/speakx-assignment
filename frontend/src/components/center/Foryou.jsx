import React from 'react'
import TweetCard from './TweetCard'

const Foryou = () => {
  return (
    <>
        <div className="w-full flex items-center flex-col">
            {/* <h1 className='text-lg font-semibold'>For You</h1> */}
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
        </div>
    </>
  )
}

export default Foryou