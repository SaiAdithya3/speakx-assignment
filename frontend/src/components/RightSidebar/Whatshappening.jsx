import React from 'react';
import Trendingcard from './Trendingcard';

const Whatshappening = () => {
    return (
        <>
            <div className="w-full flex items-start border border-zinc-500/50 rounded-2xl py-3 flex-col gap-2">
                <h1 className="text-white font-semibold text-lg px-4">What's happening</h1>
                <div className="w-full flex items-start py-3 px-4">
                    <img src="https://pbs.twimg.com/semantic_core_img/1795507131669487616/9yTWlWKi?format=jpg&name=240x240" alt="trending" className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex items-start flex-col gap-1 px-4">
                        <h1 className="text-white font-semibold text-sm">Summer Game Fest 2024</h1>
                        <p className="text-gray-400 text-xs">Gaming event | Last night</p>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-4">
                    <Trendingcard hashtag="Something is happening"/>
                    <Trendingcard hashtag="Nothing happened"/>
                    <Trendingcard hashtag="What's there"/>
                </div>
                <h1 className="text-blue-400 text-md px-4">Show more</h1>
            </div>
        </>
    )
}

export default Whatshappening