const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        }

        default:
            return state;
    }
};


export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};

export default dialogReducer;
