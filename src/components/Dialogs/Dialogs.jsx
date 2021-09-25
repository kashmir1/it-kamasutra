import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialog-reducer";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d =>
        <DialogsItem name={d.name} key={d.id++} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message key={m.id++} message={m.message}/>);

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={classes.dialogs}>
            <div><textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newPostMessage}
            />
            </div>
            <div>
                <button onClick={onAddMessage}>New message</button>
            </div>
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
