import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const { content, description, tags, imageUrls } = req.body;
        const userId = req.body.userId; 

        // Create a new post
        const post = await Post.create({
            content,
            description,
            author: userId,
            tags,
            imageUrls,
        });

        await Post.aggregate([
            { $match: { _id: post._id } },
            {
                $lookup: {
                    from: 'users', 
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
};

export const getPostById = async (req, res) => {
    try {
        // const { postId } = req.body;
        const postId = req.params.id; 
        // console.log('Received postId:', postId); 

        const post = await Post.findById(postId).populate('author', 'name email profilePic username');
        // console.log('Fetched post:', post); 

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post:', error); 
        res.status(500).json({ message: 'Internal server error' });
    }
};


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


export const updatePostByUser = async (req, res) => {
    try {
        const { postId, userId, newData } = req.body;

        // Check if the user is the author of the post
        const post = await Post.findById(postId);
        if (!post || post.author.toString() !== userId) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        // Update the post with the new data
        const updatedPost = await Post.findByIdAndUpdate(postId, newData, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
