import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        {/*<div><NavLink className={`${classes.item} ${classes.active}`} activeClassName={classes.active} to="/profile">Profile</NavLink></div>*/}
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/messages">Messages</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/musics">Music</NavLink></div>
        <div><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></div>
    </nav>
};

export default Navbar;
