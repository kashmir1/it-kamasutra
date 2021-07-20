const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
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

export default dialogReducer;
