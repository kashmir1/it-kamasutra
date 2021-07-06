import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

export const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
