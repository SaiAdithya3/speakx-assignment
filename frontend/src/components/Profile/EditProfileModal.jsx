import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useAuth } from '../../context/AuthContext';

const EditProfileModal = ({ profile, isOpen, onClose, onUpdateProfile }) => {
  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [profilePic, setProfilePic] = useState(profile.profilePic);
  const [bannerImage, setBannerImage] = useState(profile.bannerImage);
  const { user, setUser } = useAuth();

  const handleSave = async () => {
    try {
      const response = await axios.post('https://speakx-assignment-pj4w.onrender.com/api/auth/edit-profile', {
        userId: profile._id,
        username,
        email,
        bio,
        profilePic,
        bannerImage
      });

      toast.success(response.data.message);
      onUpdateProfile({ username, email, bio, profilePic, bannerImage });
      // setUser({ ...user, username, email, bio, profilePic, bannerImage });
      localStorage.setItem('user', JSON.stringify({ ...user, username, email, bio, profilePic, bannerImage }));
      onClose();
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Error updating profile");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/3 bg-zinc-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="">
          {/* <label className="block text-sm font-medium">Username</label> */}
          {/* <input
            type="text"
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
        </div>
        <div className="">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium">Profile Picture URL</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Banner Image URL</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border-zinc-500 rounded-lg focus:outline-none bg-zinc-800 text-white"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
