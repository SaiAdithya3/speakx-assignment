import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const { content, description, tags, imageUrls } = req.body;
        const userId = req.body.userId; // Assuming userId is provided in the request body

        // Create a new post
        const post = await Post.create({
            content,
            description,
            author: userId,
            tags,
            imageUrls,
        });

        // Update the user's created posts array using aggregation pipeline
        await Post.aggregate([
            { $match: { _id: post._id } }, // Match the newly created post
            {
                $lookup: {
                    from: 'users', // Assuming the users collection name is 'users'
                    localField: 'author',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            { $unwind: '$user' }, // Unwind to access the user document
            {
                $addFields: {
                    createdPosts: {
                        $concatArrays: ['$user.createdPosts', [post._id]], // Add the new post to the user's createdPosts array
                    },
                },
            },
            { $project: { user: 0 } }, // Exclude the user field from the result
        ]);

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email profilePic username');
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// getPostsByUser function
export const getPostsByUser = async (req, res) => {
    try {
        const { userId } = req.body;
        const userPosts = await Post.find({ author: userId }).populate('author', 'name email ');
        res.status(200).json(userPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
