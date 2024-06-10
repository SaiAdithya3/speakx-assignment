import express from 'express';
import { getUserDetailsByUsername } from '../controllers/userController.js';
const router = express.Router();

router.get("/get/:username", getUserDetailsByUsername);


export default router;