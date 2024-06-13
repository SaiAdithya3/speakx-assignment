import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { CiCalendar } from "react-icons/ci";
import ProfilePosts from './ProfilePosts';
import { toast } from 'sonner';
import EditProfileModal from './EditProfileModal';

const ProfileDetail = (props) => {
    const { profile, isCurrentUser } = props;
    const [activeSection, setActiveSection] = useState('Posts');
    const [isFollowing, setIsFollowing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState(profile);

    const userId = JSON.parse(localStorage.getItem('user'))?._id;

    useEffect(() => {
        setIsFollowing(profile.followers.includes(userId));
    }, [userId, profile]);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const handleFollowClick = async () => {
        try {
            const response = isFollowing 
                ? await axios.post('https://speakx-assignment-pj4w.onrender.com/api/users/unfollow', { userId: userId, followId: profile._id }) 
                : await axios.post('https://speakx-assignment-pj4w.onrender.com/api/users/follow', { userId: userId, followId: profile._id });

            setIsFollowing(!isFollowing); 
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error following/unfollowing user", error);
            toast.error("Error following/unfollowing user");
        }
    };

    const handleEditProfileClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleProfileUpdate = (newProfileData) => {
        setUpdatedProfile(prevProfile => ({
            ...prevProfile,
            ...newProfileData
        }));
    };

    return (
        <>
            <div className="w-full flex items-center flex-col">
                <div className="w-full flex items-center flex-col">
                    <img src={updatedProfile.bannerImage} alt="profile banner" className="w-full h-52 object-cover" />
                    {/* <img src="https://www.porschedriving.com/los-angeles/-/media/porschedrivinglosangeles/backgrounds/gridwall/l---718-gt4-rs-banner/l---718-gt4-rs-banner-2/l---718-gt4-rs-banner-3/l---718-gt4-rs-banner-4.jpg" alt="profile" className="w-full h-52 object-cover" /> */}

                    <div className="flex items-end w-full justify-between px-6 -mt-20">
                        <img src={`${updatedProfile.profilePic}`} alt="profile" className="w-36 h-36 rounded-full border-4 border-black" />
                        
                        <div className="flex items-center gap-3 py-6">
                            <PiDotsThreeOutlineFill className='text-white border rounded-full text-3xl p-1.5' />
                            {isCurrentUser ? (
                                <button onClick={handleEditProfileClick} className="bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-2 text-xs rounded-full">Edit Profile</button>
                            ) : (
                                <button onClick={handleFollowClick} className={`bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-2 text-xs rounded-full ${isFollowing ? 'bg-gray-400' : ''}`}>
                                    {isFollowing ? 'Unfollow' : 'Follow'}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start px-6 py-3">
                        <h1 className="text-xl font-semibold">{updatedProfile.username}</h1>
                        <h1 className="text-xs text-zinc-400">@{updatedProfile.username}</h1>
                        <h1 className="text-md font-medium">{updatedProfile && updatedProfile.bio}</h1>
                        <h1 className="text-xs py-3 text-zinc-200 flex items-center gap-1"> <CiCalendar className='text-xl'/>Joined {formatTimestamp(updatedProfile.createdAt)}</h1>
                        <h1 className="text-xs text-zinc-400 gap-5 flex">
                            <span>
                                <span className="text-white font-semibold">{updatedProfile?.followers?.length}</span> Followers
                            </span>
                            <span>
                                <span className="text-white font-semibold">{updatedProfile?.following?.length}</span> Following
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
                <ProfilePosts userId={profile._id} />
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

            <EditProfileModal
                profile={updatedProfile}
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onUpdateProfile={handleProfileUpdate}
            />
        </>
    );
};

export default ProfileDetail;
