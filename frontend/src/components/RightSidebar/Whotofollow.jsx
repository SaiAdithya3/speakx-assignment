import React from 'react';
import Accountcard from './Accountcard';

const Whotofollow = () => {
    return (
        <>
            <div className="w-full flex items-start border border-zinc-500/50 rounded-2xl p-4 flex-col gap-2">
                <h1 className="text-white font-semibold text-xl">Who to follow</h1>
                <div className="flex flex-col items-center gap-2 py-2 w-full">
                    <Accountcard name="BMW" username="bmw" />
                    <Accountcard name="Mercedes Benz" username="mercedes" />
                    <Accountcard name="Pagani" username="pagani" />
                </div>
                <h1 className="text-blue-400 text-md">Show more</h1>
            </div>
        </>
    )
}

export default Whotofollow