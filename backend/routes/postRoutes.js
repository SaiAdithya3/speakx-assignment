import express from 'express';
import { createPost, getAllPosts, getPostById, getPostsByUser } from '../controllers/postController.js';
const router = express.Router();

router.post("/create", createPost);
router.get("/allposts", getAllPosts);
router.get("/:id", getPostById);
router.get("/postsbyuser", getPostsByUser);

export default router;