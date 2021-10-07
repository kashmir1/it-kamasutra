import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    console.log(props.login);
    console.log(props.isAuth);
    return <header className={ classes.header }>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt=""/>
        <div className={ classes.loginBlock }>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button></div> :  <NavLink to={ '/login' }>Login</NavLink>
            }
        </div>
    </header>
};

export default Header;
