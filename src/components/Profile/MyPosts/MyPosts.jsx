import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {message: 'Go Eva!', likeCount: '18'},
        {message: 'Wake up Sindzy!', likeCount: 12},
        {message: 'Wake up!', likeCount: 122},
    ];

    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
        <div>
            <button>New post</button>
        </div>
        <div>
            <Post
                message={postsData[0].message}
                likeCount={postsData[0].likeCount}
            />
            <Post
                message={postsData[1].message}
                likeCount={postsData[1].likeCount}
            />
            <Post
                message={postsData[2].message}
                likeCount={postsData[2].likeCount}
            />
        </div>
    </div>
};

export default MyPosts;
