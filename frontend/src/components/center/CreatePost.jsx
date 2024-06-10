import React, { useState, useEffect } from 'react';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineGif } from "react-icons/hi2";
import { GoImage } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { useAuth } from '../../context/AuthContext';
import ImageKit from 'imagekit';
import axios from 'axios';

const CreatePost = ({ mode, onPostCreated }) => {
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const { user } = useAuth();
    console.log(user)
    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading(true);
            try {
                const imagekit = new ImageKit({
                    publicKey: "public_ffNQ43/5mSLdUUnli2yQpX2nlxU=",
                    privateKey: "private_fnAbFnaYL6M4mb1q0gVH0KsyGG4=",
                    urlEndpoint: "https://ik.imagekit.io/vsn/tweetx",
                });

                const formData = new FormData();
                formData.append('file', file);
                formData.append('fileName', file.name);

                const response = await imagekit.upload({
                    file,
                    fileName: file.name,
                });
                console.log("Image uploaded successfully:", response.url);
                setImageUrl(response.url);
            } catch (error) {
                console.error("Image upload failed:", error);
            } finally {
                setIsUploading(false);
            }
        }
    };

    const handleSubmit = async () => {
        if (content.trim() === '') return;

        const postData = {
            content,
            userId: user._id,
            imageUrls: imageUrl ? [imageUrl] : [],
            tags: [], // Add tag functionality if needed
        };

        try {
            const response = await axios.post('http://localhost:5000/api/posts/create', postData);
            if (response.status === 201) {
                setContent('');
                setImageUrl('');
                // onPostCreated(response.data.post); 
            }
        } catch (error) {
            console.error("Failed to create post:", error);
        }
    };

    const isContentEmpty = content.trim().length === 0;

    return (
        <div className={`w-full flex border-zinc-500/50 ${mode === 'comment' ? "p-2 py-4" : "border-b p-4"}`}>
            <img src={user && user.profilePic} alt="profile" className='w-12 h-12 mr-4 rounded-full' />
            <div className="flex flex-col w-full">
                <textarea
                    className="w-full h-12 p-2 bg-transparent focus:border-b border-zinc-500 resize-none focus:outline-none"
                    placeholder={mode === 'comment' ? "Post your reply" : "What's happening?"}
                    value={content}
                    onChange={handleChange}
                ></textarea>
                {imageUrl && (
                    <div className="mt-2">
                        <img src={imageUrl} alt="Uploaded" className="max-h-40 rounded" />
                    </div>
                )}
                <div className="flex justify-between items-center pt-2 mt-2">
                    <div className="flex text-xl space-x-4 text-[#1d9bf0]">
                        <label className="cursor-pointer">
                            <GoImage />
                            <input type="file" className="hidden" onChange={handleImageUpload} disabled={isUploading} />
                        </label>
                        <button className="focus:outline-none">
                            <MdOutlineEmojiEmotions />
                        </button>
                        <button className="focus:outline-none">
                            <HiOutlineGif />
                        </button>
                        <button className="focus:outline-none">
                            <LuListTodo />
                        </button>
                        <button className="focus:outline-none">
                            <MdLocationPin />
                        </button>
                    </div>
                    <button
                        className={`font-semibold text-sm text-white rounded-full px-4 py-2 focus:outline-none ${isContentEmpty ? 'bg-[#1d9bf0]/50 cursor-not-allowed' : 'bg-[#1d9bf0] hover:bg-blue-600'}`}
                        disabled={isContentEmpty || isUploading}
                        onClick={handleSubmit}
                    >
                        {mode === 'comment' ? 'Reply' : 'Post'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
