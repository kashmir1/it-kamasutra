import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../Common/FormsControls/FormsControl";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newMessageBody'}
                           component={Textarea}
                           validate={[required, maxLength100]}
                           placeholder={'Enter your message'}
                    />
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
