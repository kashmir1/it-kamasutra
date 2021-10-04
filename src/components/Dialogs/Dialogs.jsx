import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialog-reducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newMessageBody'} component={'textarea'} />
                    <button>New message</button>
                </div>
            </form>
        </div>
    )
};

const AddMessageFormRedux = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm);

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d =>
        <DialogsItem name={d.name} key={d.id++} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message key={m.id++} message={m.message}/>);


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={classes.dialogs}>
            <AddMessageFormRedux onSubmit={addNewMessage} />
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
