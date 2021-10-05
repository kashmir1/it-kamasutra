import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPost'} component={Textarea}
                       placeholder={'Post message'}
                       validate={[required, maxLength10]}
                />
                <button>New post</button>
            </form>
        </div>
    )
};

const AddNewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);


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
        <AddNewPostReduxForm onSubmit={onAddPost}/>
        <div>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;
