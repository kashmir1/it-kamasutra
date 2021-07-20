import React from "react";

const Sidebar = (props) => {
    debugger

    let friendList = props.sidebar.map(friend =>
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
