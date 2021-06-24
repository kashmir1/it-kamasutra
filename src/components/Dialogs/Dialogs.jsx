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

let dialogsData = [
    {id: 1, name: 'Uliana'},
    {id: 2, name: 'Marianna'},
    {id: 3, name: 'Alexey'},
];

let messages = [
    {id: 1, message: 'Let it go'},
    {id: 2, message: 'Show yourself'},
    {id: 3, message: 'Into the unknown'},
];

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
            </div>
        </div>
    )
};

export default Dialogs
