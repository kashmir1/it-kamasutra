import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    };

    return (
        <div className={classes.dialogs}>
            <div><textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newPostMessage}
            />
            </div>
            <div>
                <button onClick={addMessage}>New message</button>
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
