import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import ProfileDetail from '../components/Profile/ProfileDetail';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import verified from '../assets/verified.png';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const slicedUsername = username.slice(1);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://speakx-assignment-pj4w.onrender.comusers/get/${slicedUsername}`);
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, [slicedUsername]);

  return (
    <>
      <div className="flex flex-col items-start w-full justify-between">
        <div className="w-full sticky top-0 flex items-center justify-center">
          <div className="w-full border-b border-zinc-500/30 flex bg-black/60 backdrop-blur-md text-white z-10">
            <div className={`w-full flex gap-7 py-2 px-6 items-center cursor-pointer `}>
              <FaArrowLeft onClick={() => navigate('/')} />
              <div className="flex flex-col items-start">
                <h1 className='text-md font-semibold flex items-center gap-1'>
                  {slicedUsername}
                  <img src={verified} className='w-4 h-4' alt="verified" />
                </h1>
                <h1 className='text-xs text-zinc-600'>12.7k Posts</h1>
              </div>
            </div>
          </div>
        </div>

        {profile ? (
          <ProfileDetail profile={profile} isCurrentUser={profile._id === JSON.parse(localStorage.getItem('user'))?._id} />
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </>
  )
}

export default ProfilePage;
