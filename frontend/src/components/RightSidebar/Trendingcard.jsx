import React from 'react';
import {PiDotsThreeOutlineFill} from 'react-icons/pi';


const Trendingcard = (props) => {
    const {hashtag} = props;
    return (
        <>
            <div className="flex w-full px-4 py-2 cursor-pointer hover:bg-zinc-950 items-center justify-between">
                <div className="flex items-center gap-2">
                      <div className="flex flex-col items-start">
                        <h1 className="text-white text-sm font-semibold hover:underline">{hashtag}</h1>
                        <p className="text-xs">100k posts</p>
                    </div>
                </div>
                <PiDotsThreeOutlineFill className='text-white' />
            </div>
        </>
    )
}

export default Trendingcard