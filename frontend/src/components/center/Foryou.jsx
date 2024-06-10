import React from 'react'
import TweetCard from './TweetCard'

const Foryou = () => {
  return (
    <>
        <div className="w-full flex items-center flex-col">
            {/* <h1 className='text-lg font-semibold'>For You</h1> */}
            <h1 className='text-sm text-sky-500 border-b border-zinc-700 w-full flex justify-center py-3 hover:bg-zinc-900 cursor-pointer'>Show 70 posts</h1>
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