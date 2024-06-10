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


