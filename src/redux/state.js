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
    },

    profilePage: {
        posts: [
            {message: 'Go Eva!', likeCount: '18'},
            {message: 'Wake up Sindzy!', likeCount: 12},
            {message: 'Wake up!', likeCount: 122},
        ]
    },

    sidebar: {
        friends: [
            {avatar: 'https://www.kinopoisk.ru/images/sm_actor/1130955.jpg', name: 'Эмма стоун'},
            {avatar: 'https://www.kinopoisk.ru/images/sm_actor/15526.jpg', name: 'Эмма Томпсон'},
            {avatar: 'https://www.kinopoisk.ru/images/sm_actor/1136927.jpg', name: 'Джоэль Фрай'},
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost)
};

export default state;
