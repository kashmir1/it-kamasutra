import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name="Uliana" id="1"/>
                <DialogsItem name="Marianna" id="2"/>
                <DialogsItem name="Alexey" id="3"/>
            </div>
            <div className={classes.messages}>
                <Message message="Let it go"/>
                <Message message="Show yourself"/>
                <Message message="Into the unnown"/>
            </div>
        </div>
    )
};

export default Dialogs
