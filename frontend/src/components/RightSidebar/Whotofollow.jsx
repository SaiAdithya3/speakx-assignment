import React, { useState, useEffect } from 'react';
import Accountcard from './Accountcard';

const Whotofollow = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const currentUserId = user ? user._id : null;

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const res = await fetch('https://speakx-assignment-pj4w.onrender.com/api/users/getallusers');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                const filteredData = data.filter(account => account._id !== currentUserId);
                const randomCount = Math.floor(Math.random() * 10) + 1;
                setAccounts(filteredData.slice(0, randomCount));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching accounts:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        if (currentUserId) {
            fetchAccounts();
        } else {
            setError('User not found');
            setLoading(false);
        }
    }, [currentUserId]);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <>
            <div className="w-full flex items-start border border-zinc-500/50 rounded-2xl py-4 flex-col gap-2">
                <h1 className="text-white font-semibold text-lg px-4">Who to follow</h1>
                <div className="flex flex-col items-center gap-2 py-2 w-full">
                    {accounts && accounts.map(account => (
                        <Accountcard key={account._id} account={account} />
                    ))}
                </div>
                <h1 className="text-blue-400 text-md px-4">Show more</h1>
            </div>
        </>
    )
}

export default Whotofollow;
