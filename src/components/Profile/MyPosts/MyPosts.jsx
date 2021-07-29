import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likeCount={p.likeCount}
    />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };


    // cmd + alt + v = новая переменная
    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <div><textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
        /></div>
        <div>
            <button onClick={onAddPost}>New post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;
