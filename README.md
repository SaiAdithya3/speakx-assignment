# TweetX - Twitter Clone

TweetX is a feature-rich Twitter clone built for the SpeakX company assignment. This application includes a secure JWT-based session login system, a MongoDB database for data storage, and various user interactions such as posting, commenting, liking, following/unfollowing users, and editing profiles.

## Features

### User Authentication
- **JWT-Based Session Login**: Secure authentication and session management using JWT.

### Tweet Management
- **Create, Read, Update, Delete (CRUD) Tweets**: Users can create new tweets, edit existing ones, delete tweets, and view all tweets.

### Commenting System
- **Nested Comments**: Users can comment on tweets and reply to other comments, supporting a nested comment structure.

### Interaction Features
- **Liking System**: Users can like and unlike tweets.
- **Following/Unfollowing Users**: Users can follow and unfollow other users, with real-time updates to their following/followers lists.

### Profile Management
- **Edit Profile**: Users can view and edit their profile information, including changing their username and bio.

## Live Demo

- **Frontend**: [https://tweetx-six.vercel.app/]
- **Backend**: [https://speakx-assignment-pj4w.onrender.com/]

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Image Upload**: ImageKit

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saiAdithya3/speakx-assignment.git
   cd speakx-assignment
   ```
2. **Install the dependencies**
    ```bash
    cd frontend
    npm install
    ```
    ```bash
    cd ..
    cd backend
    npm install
    ```
3. **Start the frontend server**
    ```bash
    npm run dev
    ```
4. **Add environmental variables**
    Create a new .env file and copy the following env variables and paste it in the '.env' file in client folder
    ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret 
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    ```

5. **Start the backend server**
    ```bash
    npm start
    ```
6. **Start the frontend server**
    ```bash
    npm run dev
    ```
7. **Access the application**
    *Frontend*: http://localhost:5173/
    *Backend*:https://localhost:5000/
