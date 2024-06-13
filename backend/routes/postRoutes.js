import express from 'express';
import { createPost, getAllPosts, getPostById, getPostsByUser, likePost, createCommentForPost, getFollowingPosts } from '../controllers/postController.js';
const router = express.Router();

router.post("/create", createPost);
router.get("/allposts", getAllPosts);
router.get("/:id", getPostById);
router.get("/postsbyuser/:id", getPostsByUser);
router.post("/like", likePost);
router.post("/addcoment", createCommentForPost);
router.post("/getfollowingposts", getFollowingPosts);

export default router;