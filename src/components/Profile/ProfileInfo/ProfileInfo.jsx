import React from "react";
import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return <div>
      <div>
          <img className={classes.mainImg} src="https://eva-not-end.com/Portal/uploads/gallery/category_9/gallery_22897_9_1077695.jpg" alt=""/>
      </div>
      <div className={classes.descriptionBlock}>
          avatar + description
      </div>
  </div>
};

export default ProfileInfo;
