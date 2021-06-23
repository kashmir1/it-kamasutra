import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Uliana</NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Marianna</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Alexey</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Let it go</div>
                <div className={classes.message}>Oh my god</div>
                <div className={classes.message}>Tuk</div>
            </div>
        </div>
    )
};

export default Dialogs
