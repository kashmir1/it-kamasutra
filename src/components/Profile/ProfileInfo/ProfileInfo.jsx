import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={classes.mainImg} src="https://eva-not-end.com/Portal/uploads/gallery/category_9/gallery_22897_9_1077695.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob ? 'Ищу канеш' : props.profile.lookingForAJobDescription}</div>
            <div>
                <h3>Контакты</h3>
                <div></div>
            </div>
        </div>
    )

};

export default ProfileInfo;
