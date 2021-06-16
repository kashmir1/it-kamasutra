import React from "react";
import classes from './Post.module.css'
const Post = (props) => {
    return <div className={classes.item}>
                <img src="http://img0.joyreactor.cc/pics/avatar/tag/2216804" alt=""/>
                {props.message}
                <a href=""> Like</a> <span>{props.likeCount}</span>
            </div>
};

export default Post;
