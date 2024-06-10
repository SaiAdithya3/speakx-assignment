import Post from '../models/post.js';
import User from '../models/user.js';
import Comment from '../models/comment.js';

export const createPost = async (req, res) => {
    try {
        const { content, description, tags, imageUrls } = req.body;
        const userId = req.body.userId; 

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
            { $unwind: '$user' },
            {
                $addFields: {
                    createdPosts: {
                        $concatArrays: ['$user.createdPosts', [post._id]], 
                    },
                },
            },
            { $project: { user: 0 } }, 
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
        const postId = req.params.id; 

        const post = await Post.findById(postId)
            .populate({
                path: 'author',
                select: 'name email profilePic username'
            })
            .populate({
                path: 'comments',
                select: 'content author imageUrls comments likes createdAt', 
                populate: {
                    path: 'author',
                    select: 'username profilePic'
                }
            });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post:', error); 
        res.status(500).json({ message: 'Internal server error' });
    }
};



export const getPostsByUser = async (req, res) => {
    try {
        // const { userId } = req.body;
        const userId = req.params.id;
        const userPosts = await Post.find({ author: userId }).populate('author', 'name email profilePic username');
        res.status(200).json(userPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const updatePostByUser = async (req, res) => {
    try {
        const { postId, userId, newData } = req.body;

        const post = await Post.findById(postId);
        if (!post || post.author.toString() !== userId) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

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

export const likePost = async (req, res) => {
    try {
        const { postId, userId } = req.body;
        console.log('Received postId:', postId);
        console.log('Received userId:', userId);

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!post.likes) {
            post.likes = [];
        }

        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: 'Post already liked by the user' });
        }

        post.likes.push(userId);
        post.likesCount += 1;

        await post.save();

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        // user.likedPosts.push(postId);
        // await user.save();

        res.status(200).json({ message: 'Post liked successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const createCommentForPost = async (req, res) => {
    try {
        const { postId, content, userId, imageUrls } = req.body;
      
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = await Comment.create({
            content,
            author: userId,
            imageUrls,
        });

        post.comments.push(comment._id);
        await post.save();

        res.status(201).json({ message: 'Comment created successfully', comment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createNestedComment = async (req, res) => {
    try {
        const { commentId, content, userId } = req.body;

        
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        const nestedComment = await Comment.create({
            content,
            author: userId,
        });

        comment.comments.push(nestedComment._id);
        await comment.save();

        res.status(201).json({ message: 'Nested comment created successfully', nestedComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};