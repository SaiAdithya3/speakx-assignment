import User from '../models/user.js'

export const getUserDetailsByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username })
            .populate({
                path: 'posts',
                select: 'title content createdAt updatedAt'
            })
            .populate({
                path: 'followers',
                select: 'fullName username profilePic' 
            })
            .populate({
                path: 'following',
                select: 'fullName username profilePic' 
            });

        if (!user) {
            throw new Error('User not found');
        }

        return res.send(user);
    } catch (error) {
        console.error("Error fetching user details:", error);
        throw error;
    }
};

export const followUser = async (req, res) => {
    try {
        const { userId, followId } = req.body; 

        const user = await User.findById(userId);
        const followUser = await User.findById(followId);

        if (!user || !followUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.following.includes(followId)) {
            return res.status(400).json({ message: 'Already following the user' });
        }

        user.following.push(followId);
        followUser.followers.push(userId);

        await user.save();
        await followUser.save();

        res.status(200).json({ message: 'User followed successfully', user });
    } catch (error) {
        console.error("Error following user:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const unfollowUser = async (req, res) => {
    try {
        const { userId, followId } = req.body;

        const user = await User.findById(userId);
        const unfollowUser = await User.findById(followId);

        if (!user || !unfollowUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.following.includes(followId)) {
            return res.status(400).json({ message: 'Not following the user' });
        }

        user.following = user.following.filter(id => id.toString() !== followId);
        unfollowUser.followers = unfollowUser.followers.filter(id => id.toString() !== userId);

        await user.save();
        await unfollowUser.save();

        res.status(200).json({ message: 'User unfollowed successfully', user });
    } catch (error) {
        console.error("Error unfollowing user:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.find({});

        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};