import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
        <div>
            <button>New post</button>
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
