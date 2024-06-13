import React from 'react';
import { Link } from 'react-router-dom';

const Accountcard = (props) => {
    // console.log(props.account)
    const { account } = props
    return (
        <>
            <Link to={`/profile/@${account.username}`} className="flex w-full px-4 py-2 cursor-pointer hover:bg-zinc-950 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={`${account.profilePic}.png`} alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-white text-sm font-semibold hover:underline">{account.username}</h1>
                        <p className="text-sm">@{account.username}</p>
                    </div>
                </div>
                <button className='bg-white px-4 py-2 text-black font-semibold text-sm rounded-full'>Follow</button>
            </Link>
        </>
    )
}

export default Accountcard