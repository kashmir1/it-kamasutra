import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return <div className={classes.content}>
      <div>
          <img className={classes.mainImg} src="https://eva-not-end.com/Portal/uploads/gallery/category_9/gallery_22897_9_1077695.jpg" alt=""/>
      </div>
      <div>
          avatar + description
      </div>
      <MyPosts />
  </div>
};

export default Profile;
