import React from "react";
import classes from './Profile.module.css'
const Profile = () => {
  return <div className={classes.content}>
      <div>
          <img className={classes.mainImg} src="https://eva-not-end.com/Portal/uploads/gallery/category_9/gallery_22897_9_1077695.jpg" alt=""/>
      </div>
      <div>
          avatar + description
      </div>
      <div>
          My posts
          <div>
              New post
          </div>
          <div>
              <div>post 1</div>
              <div>post 2</div>
          </div>
      </div>
  </div>
};

export default Profile;
