import express from 'express';
import { getUserDetailsByUsername, followUser, unfollowUser, fetchAllUsers } from '../controllers/userController.js';
const router = express.Router();

router.get("/get/:username", getUserDetailsByUsername);
router.get("/getallusers", fetchAllUsers)
router.post('/follow', followUser);
router.post('/unfollow', unfollowUser);


export default router;