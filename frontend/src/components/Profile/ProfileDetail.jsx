import React, { useState } from 'react';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { CiCalendar } from "react-icons/ci";
import ProfilePosts from './ProfilePosts';

const ProfileDetail = () => {
    const [activeSection, setActiveSection] = useState('Posts');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className="w-full flex items-center flex-col">
                <div className="w-full flex items-center flex-col">
                    <img src="https://www.porschedriving.com/los-angeles/-/media/porschedrivinglosangeles/backgrounds/gridwall/l---718-gt4-rs-banner/l---718-gt4-rs-banner-2/l---718-gt4-rs-banner-3/l---718-gt4-rs-banner-4.jpg" alt="profile" className="w-full h-52 object-co" />
                    <div className="flex items-end w-full justify-between px-6 -mt-20">
                        <img src="https://avatar.iran.liara.run/public/boy?username=sara" alt="profile" className="w-36 h-36 rounded-full border-4 border-black" />
                        <div className="flex items-center gap-3 py-6">
                            <PiDotsThreeOutlineFill className='text-white border rounded-full text-3xl p-1.5' />
                            <button className="bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-2 text-xs rounded-full">Follow</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start px-6 py-3">
                        <h1 className="text-xl font-semibold">Elon Musk</h1>
                        <h1 className="text-xs text-zinc-600">@ CEO of Tesla</h1>
                        <h1 className="text-xs py-3 text-zinc-200 flex items-center gap-1"> <CiCalendar />Joined October 2023</h1>
                        <h1 className="text-xs text-zinc-600 gap-5 flex">
                            <span>
                                <span className="text-white font-semibold">2,000</span> Followers
                            </span>
                            <span>
                                <span className="text-white font-semibold">200</span> Following
                            </span>
                        </h1>
                    </div>

                    <div className="w-full items-center flex border-b border-zinc-700">
                        <div className={`w-1/4 text-center hover:bg-zinc-900 cursor-pointer p-2 text-sm ${activeSection === 'Posts' ? 'border-b-2 border-sky-400' : ''}`} onClick={() => handleSectionChange('Posts')}>Posts</div>
                        <div className={`w-1/4 text-center hover:bg-zinc-900 cursor-pointer p-2 text-sm ${activeSection === 'Replies' ? 'border-b-2 border-sky-400' : ''}`} onClick={() => handleSectionChange('Replies')}>Replies</div>
                        <div className={`w-1/4 text-center hover:bg-zinc-900 cursor-pointer p-2 text-sm ${activeSection === 'Media' ? 'border-b-2 border-sky-400' : ''}`} onClick={() => handleSectionChange('Media')}>Media</div>
                        <div className={`w-1/4 text-center hover:bg-zinc-900 cursor-pointer p-2 text-sm ${activeSection === 'Likes' ? 'border-b-2 border-sky-400' : ''}`} onClick={() => handleSectionChange('Likes')}>Likes</div>
                    </div>
                </div>
            </div>
            {/* Render content based on activeSection */}
            {activeSection === 'Posts' && (
                <ProfilePosts />
            )}
            {activeSection === 'Replies' && (
                <div>Replies Content</div>
            )}
            {activeSection === 'Media' && (
                <div>Media Content</div>
            )}
            {activeSection === 'Likes' && (
                <div>Likes Content</div>
            )}
        </>
    )
}

export default ProfileDetail;
