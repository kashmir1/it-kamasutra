import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post
                    message="Go Eva!"
                    likeCount='10'
                />
                <Post
                    message="Wake up Sindzy"
                    likeCount='12'
                />
                <Post
                    message="Wake up!"
                    likeCount='122'
                />
            </div>
        </div>
};

export default MyPosts;
