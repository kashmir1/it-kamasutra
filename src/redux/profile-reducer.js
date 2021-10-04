import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {message: 'Go Eva!', likeCount: '18'},
        {message: 'Wake up Sindzy!', likeCount: 12},
        {message: 'Wake up!', likeCount: 122},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 3,
                message: action.newPost,
                likeCount: 0
            };

            // делаем копию стейта чтобы не нарушать принцип имьютабельности
            return {
                ...state,
                posts: [...state.posts, (newPost)],
            };

        }


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }


        default:
            return state;
            // обязательно указываем дефолт, иначе, если нам придет неправильный экшн, приложение выдасть ошибку
    }
};

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
};


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
            console.log(response.data);
            dispatch(setUserProfile(response.data));

        });
};


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};


export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};



export default profileReducer;
