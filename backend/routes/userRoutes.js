import express from 'express';
import { getUserDetailsByUsername, followUser, unfollowUser } from '../controllers/userController.js';
const router = express.Router();

router.get("/get/:username", getUserDetailsByUsername);
router.post('/follow', followUser);
router.post('/unfollow', unfollowUser);


export default router;