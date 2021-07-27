import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";

const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState().messagesPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                };

                return (
                    <Dialogs
                        onMessageChange={onMessageChange}
                        addMessage={addMessage}
                        dialogsPage={state}
                    />
                )
            }
        }

        </StoreContext.Consumer>

    )
};

export default DialogsContainer
