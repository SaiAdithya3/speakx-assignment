import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connect.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import { app, server } from "./socket/socket.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:5173', 'https://tweetx-six.vercel.app', 'https://speakx-assignment-pj4w.onrender.com'],
    credentials: true,
}));

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello from Backend 👋!');
});

app.use("/api/auth", authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const httpserver = app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}! 🎉`);
});
