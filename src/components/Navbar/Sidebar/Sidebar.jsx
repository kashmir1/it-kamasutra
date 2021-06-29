import React from "react";
import classes from './Sidebarr.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    let friendList = props.friends.map(friend =>
        <div>
            <img src={friend.avatar} alt=""/>
            <span>{friend.name}</span>
        </div>
    );

    return (
        <div>
            <h3>Friends</h3>
                {friendList}
        </div>
    )
};

export default Sidebar;
