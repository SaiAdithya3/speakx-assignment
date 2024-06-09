import React from 'react';
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

const Sidebar = () => {
    return (
        <>
            <div className="z-50 flxed left-0 top-0 bg-black h-screen justify-between flex flex-col pl-16 p-3 border-r border-zinc-700/90">
                <div className="flex flex-col gap-2">

                    <div className="logo p-2 flex items-start w-full">
                        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png' alt='logo' className='w-8 h-8 invert' />
                    </div>
                    <div className="flex flex-col items-start justify-center py-2">
                        <SidebarMenuItem icon={GoHomeFill} title='Home' isActive="true" />
                        <SidebarMenuItem icon={IoSearchSharp} title='Explore' isActive="true" />
                        <SidebarMenuItem icon={HiOutlineBell} title='Notifications' isActive="true" />
                        <SidebarMenuItem icon={LuMail} title='Messages' isActive="true" />
                        <SidebarMenuItem icon={BsSlashSquare} title='Grok' isActive="true" />
                        <SidebarMenuItem icon={MdGroup} title='Communities' isActive="true" />
                        <SidebarMenuItem icon={IoPersonOutline} title='Profile' isActive="true" />
                        <SidebarMenuItem icon={PiDotsThreeCircle} title='More' isActive="true" />
                    </div>
                    <button className="bg-[#1d9bf0] hover:bg-[#4b8ebe] font-semibold flex items-center w-ful rounded-full px-3 cursor-pointer p-3 justify-center">
                        Post
                    </button>
                </div>
                <ProfileButton />
            </div>
        </>
    )
}

export default Sidebar