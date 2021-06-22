import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>Uliana</div>
                <div className={classes.dialog}>Marianna</div>
                <div className={classes.dialog}>Alexey</div>
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
