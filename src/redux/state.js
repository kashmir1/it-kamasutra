// Объявляем функцию заглушку для обсервера
let rerenderEntireTree = () => {
    console.log('state is updated')
};

let state = {
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
    }
};


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
};

export let addMessage = () => {
    let newMessage = {
        id: 3,
        message: state.messagesPage.newPostMessage,
    };

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newPostMessage = '';
    rerenderEntireTree(state)
};

export let updateNewMessageText = (newText) => {
    state.messagesPage.newPostMessage = newText;
    rerenderEntireTree(state)
};


// export const Observer = {
//     addObserver(newObserver) {
//         rerenderEntireTree = newObserver;
//     },
// };

// Создаем функцию обсервер
export const subscribe = (observer) => {
    // функции заглушки присваиваем значение observer и она ссылается на него
    rerenderEntireTree = observer;
};


// В state мы не можем импортировать функцию renderEntireTree, но мы можем ее туда передать через subscribe,
// который вызывается в index.js. После чего, созданная функция renderEntireTree в state
// переопределяется на ту, которую мы передали в subscribe. И теперь, когда мы добавляем пост,
// в state вызывается эта функция renderEntireTree

export default state;
