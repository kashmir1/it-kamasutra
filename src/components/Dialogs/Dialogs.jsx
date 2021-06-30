import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };

    return (
        <div className={classes.dialogs}>
            <div><textarea ref={newPostElement} name="" id="" cols="30" rows="10"></textarea></div>
            <div>
                <button onClick={addPost}>New post</button>
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
