import React, { useState } from 'react';
import ProfileButton from './ProfileButton';
import SidebarMenuItem from './SidebarMenuItem';
import { GoHomeFill } from "react-icons/go";
import { PiDotsThreeCircle } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
import { BsSlashSquare } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import CreatePost from '../center/CreatePost';
import { FaTimes } from "react-icons/fa";

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" style={{zIndex: 100}}>
            <div className="bg-black border border-gray-700 rounded-lg w-full max-w-lg mx-auto p-4 relative">
                <button className="absolute top-5 right-5 text-white" onClick={onClose}>
                    <FaTimes />
                </button>
                <CreatePost mode="post" onPostCreated={onPostCreated} />
            </div>
        </div>
    );
};



const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const username = JSON.parse(localStorage.getItem('user'))?.username;

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePostCreated = (newPost) => {
        // Handle new post creation if needed
        console.log('New post created:', newPost);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="z-50 left-0 top-0 pr-16 bg-black h-screen justify-between flex flex-col p-3 border-r border-zinc-700/90">
                <div className="flex flex-col gap-2">
                    <div className="logo p-2 flex items-start w-full">
                        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png' alt='logo' className='w-8 h-8 invert' />
                    </div>
                    <div className="flex flex-col items-start justify-center py-2">
                        <SidebarMenuItem icon={GoHomeFill} title='Home' isActive="true" link="" />
                        <SidebarMenuItem icon={IoSearchSharp} title='Explore' isActive="true" link="explore" />
                        <SidebarMenuItem icon={HiOutlineBell} title='Notifications' isActive="true" link="notifications" />
                        <SidebarMenuItem icon={LuMail} title='Messages' isActive="true" link="messages" />
                        <SidebarMenuItem icon={BsSlashSquare} title='Grok' isActive="true" link="grok" />
                        <SidebarMenuItem icon={MdGroup} title='Communities' isActive="true" link="commu" />
                        <SidebarMenuItem icon={IoPersonOutline} title='Profile' isActive="true" link={`profile/@${username}`} />
                        <SidebarMenuItem icon={PiDotsThreeCircle} title='More' isActive="true" link="more" />
                    </div>
                    <button
                        onClick={handleOpenModal}
                        className="bg-[#1d9bf0] hover:bg-[#4b8ebe] font-semibold flex items-center w-full rounded-full px-3 cursor-pointer p-3 justify-center"
                    >
                        Post
                    </button>
                </div>
                <ProfileButton />
            </div>
            <CreatePostModal isOpen={isModalOpen} onClose={handleCloseModal} onPostCreated={handlePostCreated} />
        </>
    );
}

export default Sidebar;