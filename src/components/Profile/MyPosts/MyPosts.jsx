import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likeCount={p.likeCount}
    />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action);
    };

    let onPostChante = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };


    // cmd + alt + v = новая переменная
    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <div><textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChante}
        /></div>
        <div>
            <button onClick={addPost}>New post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;
