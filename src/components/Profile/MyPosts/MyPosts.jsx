import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPostsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPost'} component={'textarea'} />
                <button>New post</button>
            </form>
        </div>
    )
};

const MyPostsReduxForm = reduxForm({
    // a unique name for the form
    form: 'myPost'
})(MyPostsForm);


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likeCount={p.likeCount}
    />);


    let onAddPost = (values) => {
        props.addPost(values.newPost);
    };

    // cmd + alt + v = новая переменная
    return <div className={classes.postsWrapper}>
        <h3>My posts</h3>
        <MyPostsReduxForm onSubmit={onAddPost}/>
        <div>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;
