import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likeCount={p.likeCount}
    />);

    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
        <div>
            <button>New post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;
