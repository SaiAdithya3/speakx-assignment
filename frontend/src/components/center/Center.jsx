import React, { Suspense, useState } from 'react';
import CreatePost from './CreatePost';

// Lazy load Foryou component
const Foryou = React.lazy(() => import('./Foryou'));
// Lazy load FollowingFeed component
const FollowingFeed = React.lazy(() => import('./FollowingFeed'));

const Center = () => {
    const [activeSection, setActiveSection] = useState('forYou');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="bg-black w-full flex items-center flex-col">
            <div className="w-full sticky top-0 flex items-center justify-center">
                <div className="w-full pt-4 border-b border-zinc-500/50 flex bg-black/60 backdrop-blur-md text-white z-10">
                    <div
                        className={`w-1/2 flex flex-col gap-2 justify-start items-center cursor-pointer ${
                            activeSection === 'forYou' ? 'text-[#1d9bf0]' : ''
                        }`}
                        onClick={() => handleSectionChange('forYou')}
                    >
                        <h1 className='text-sm text-center'>For you</h1>
                        { activeSection === 'forYou' && <div className='w-1/5 h-1 bg-[#1d9bf0] rounded-full'></div>}
                    </div>
                    <div
                        className={`w-1/2 flex flex-col gap-2 justify-start items-center cursor-pointer ${
                            activeSection === 'following' ? 'text-[#1d9bf0]' : ''
                        }`}
                        onClick={() => handleSectionChange('following')}
                    >
                        <h1 className='text-sm text-center'>Following</h1>
                        { activeSection === 'following' && <div className='w-1/5 h-1 bg-[#1d9bf0] rounded-full'></div>}
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-5 items-center">
                <CreatePost />
                {/* Wrap the lazy loaded components with Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    {activeSection === 'forYou' && <Foryou />}
                    {activeSection === 'following' && <FollowingFeed />}
                </Suspense>
            </div>
        </div>
    )
}

export default Center;
