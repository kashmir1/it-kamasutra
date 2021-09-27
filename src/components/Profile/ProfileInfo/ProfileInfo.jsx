import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}
                />
            </div>

            <div>{props.profile.fullName}424234234</div>
            <div>{props.profile.lookingForAJob ? 'Ищу канеш' : props.profile.lookingForAJobDescription}</div>
            <div>
                <h3>Контакты</h3>
                <div></div>
            </div>
        </div>
    )

};

export default ProfileInfo;
