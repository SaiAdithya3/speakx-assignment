import React from 'react'

const SubscribeCard = () => {
    return (
        <>
            <div className="w-full flex items-start border border-zinc-500/50 rounded-2xl px-4 py-3 flex-col gap-2">
                <h1 className="text-white font-semibold text-lg">Subscribe to Premium</h1>
                <p className="text-sm">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className="bg-[#1d9bf0] text-white px-3 py-1.5 text-sm font-semibold rounded-full">Subscribe</button>
            </div>
        </>
    )
}

export default SubscribeCard