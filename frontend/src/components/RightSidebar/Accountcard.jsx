import React from 'react'

const Accountcard = (props) => {
    const { name, username } = props
    return (
        <>
            <div className="flex w-full hover:bg-zinc-900 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-bmw-5-202750.png" alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-white font-semibold hover:underline">{name}</h1>
                        <p className="text-sm">@{username}</p>
                    </div>
                </div>
                <button className='bg-white px-4 py-2 text-black font-semibold text-sm rounded-full'>Follow</button>
            </div>
        </>
    )
}

export default Accountcard