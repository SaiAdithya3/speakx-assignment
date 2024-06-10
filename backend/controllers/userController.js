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
        const { userId, followId } = req.body; // userId is the current user, followId is the user to follow

        // Find the current user and the user to follow
        const user = await User.findById(userId);
        const followUser = await User.findById(followId);

        if (!user || !followUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if already following
        if (user.following.includes(followId)) {
            return res.status(400).json({ message: 'Already following the user' });
        }

        // Add to following and followers
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
        const { userId, followId } = req.body; // userId is the current user, followId is the user to unfollow

        // Find the current user and the user to unfollow
        const user = await User.findById(userId);
        const unfollowUser = await User.findById(followId);

        if (!user || !unfollowUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if already not following
        if (!user.following.includes(followId)) {
            return res.status(400).json({ message: 'Not following the user' });
        }

        // Remove from following and followers
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
