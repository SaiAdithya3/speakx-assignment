import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            maxlength: 280,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        retweets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
w
export default Post;
