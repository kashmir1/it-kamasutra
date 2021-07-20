import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    return <nav className={classes.nav}>
        {/*activeClassName добавляет активный класс*/}
        {/*<div><NavLink className={`${classes.item} ${classes.active}`} activeClassName={classes.active} to="/profile">Profile</NavLink></div>*/}
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/musics">Music</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></div>
        <Sidebar
            sidebar={props.sidebar.friends}
            dispatch={props.dispatch}
        />
    </nav>
};

export default Navbar;
