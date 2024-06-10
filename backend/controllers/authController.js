import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, fullName, bio } = req.body;

        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        const userExists = await User.exists({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fullName,
            bio,
            profilePic: `https://avatar.iran.liara.run/public/boy?username=${username}`
        });

        await newUser.save();
        generateToken(newUser._id, res);

        res.status(201).json({
            message: "User registered successfully!",
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const editProfile = async (req, res) => {
    try {
        const { userId, username, email, bio, profilePic, bannerImage } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        if (bio) user.bio = bio;
        if (profilePic) user.profilePic = profilePic;
        if (bannerImage) user.bannerImage = bannerImage;

        await user.save();
        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error in edit profile controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const changePassword = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword, confirmPassword } = req.body;

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findById(userId);
        if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
            return res.status(400).json({ message: "Invalid old password" });
        }

        user.password = await bcrypt.hash(newPassword, 12);
        await user.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Error in change password controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
