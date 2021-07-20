import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {act} from "@testing-library/react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export let store = {
    _state: {
        messagesPage: {
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

        },

        profilePage: {
            posts: [
                {message: 'Go Eva!', likeCount: '18'},
                {message: 'Wake up Sindzy!', likeCount: 12},
                {message: 'Wake up!', likeCount: 122},
            ],
            newPostText: 'Add new post',
        },

        sidebar: {
            friends: [
                {avatar: 'https://www.kinopoisk.ru/images/sm_actor/1130955.jpg', name: 'Эмма стоун'},
                {avatar: 'https://www.kinopoisk.ru/images/sm_actor/15526.jpg', name: 'Эмма Томпсон'},
                {avatar: 'https://www.kinopoisk.ru/images/sm_actor/1136927.jpg', name: 'Джоэль Фрай'},
            ]
        },
    },

    // Объявляем функцию заглушку для обсервера
    _callbackSubscriber() {
        console.log('state is updated')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        // функции заглушки присваиваем значение observer и она ссылается на него
        this._callbackSubscriber = observer;
    },
    // В state мы не можем импортировать функцию renderEntireTree, но мы можем ее туда передать через subscribe,
    // который вызывается в index.js. После чего, созданная функция renderEntireTree в state
    // переопределяется на ту, которую мы передали в subscribe. И теперь, когда мы добавляем пост,
    // в state вызывается эта функция renderEntireTree

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callbackSubscriber(this._state)
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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


export default store;
