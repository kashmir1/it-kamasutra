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
    let dialogs = [
        {id: 1, name: 'Uliana'},
        {id: 2, name: 'Marianna'},
        {id: 3, name: 'Alexey'},
    ];

    let messages = [
        {id: 1, message: 'Let it go'},
        {id: 2, message: 'Show yourself'},
        {id: 3, message: 'Into the unknown'},
    ];

    let dialogsElements = dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs
