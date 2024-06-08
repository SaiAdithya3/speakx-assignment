import React from 'react'

const Whatshappening = () => {
    return (
        <>
            <div className="w-full flex items-start border border-zinc-500/50 rounded-2xl px-4 py-3 flex-col gap-2">
                <h1 className="text-white font-semibold text-xl">What's happening</h1>
                <div className="w-full flex items-start py-3">
                    <img src="https://pbs.twimg.com/semantic_core_img/1795507131669487616/9yTWlWKi?format=jpg&name=240x240" alt="trending" className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex items-start flex-col gap-1 px-4">
                        <h1 className="text-white font-semibold text-sm">Summer Game Fest 2024</h1>
                        <p className="text-gray-400 text-xs">Gaming event | Last night</p>
                    </div>
                </div>
                <h1 className="text-blue-400 text-md">Show more</h1>
            </div>
        </>
    )
}

export default Whatshappening