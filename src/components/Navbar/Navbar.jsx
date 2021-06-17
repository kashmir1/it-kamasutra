import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
    return <nav className={classes.nav}>
        <div><a className={`${classes.item} ${classes.active}`} href="/profile">Profile</a></div>
        <div><a className={classes.item} href="/message">Messages</a></div>
        <div><a className={classes.item} href="/news">News</a></div>
        <div><a className={classes.item} href="/musics">Music</a></div>
        <div><a className={classes.item} href="/settings">Settings</a></div>
    </nav>
};

export default Navbar;
