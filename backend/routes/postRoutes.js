import express from 'express';
import { createPost, getAllPosts, getPostById, getPostsByUser, likePost, createCommentForPost } from '../controllers/postController.js';
const router = express.Router();

router.post("/create", createPost);
router.get("/allposts", getAllPosts);
router.get("/:id", getPostById);
router.get("/postsbyuser/:id", getPostsByUser);
router.post("/like", likePost);
router.post("/addcoment", createCommentForPost);

export default router;