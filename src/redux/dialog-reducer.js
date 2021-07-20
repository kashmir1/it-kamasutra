const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Uliana'},
        {id: 2, name: 'Marianna'},
        {id: 3, name: 'Alexey'},
    ],
    messages: [
        {id: 1, message: 'Let it go'},
        {id: 2, message: 'Show yourself'},
        {id: 3, message: 'Into the unknown'},
    ],
    newPostMessage: 'Add new message',
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newPostMessage,
            };

            state.messages.push(newMessage);
            state.newPostMessage = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newPostMessage = action.newText;
            return state;

        default:
            return state;
    }
};


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default dialogReducer;
