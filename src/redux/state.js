

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

    addMessage() {
        let newMessage = {
            id: 3,
            message: this._state.messagesPage.newPostMessage,
        };

        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newPostMessage = '';
        this._callbackSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newPostMessage = newText;
        this._callbackSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callbackSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callbackSubscriber(this._state)
        }
    }
};

export default store;
