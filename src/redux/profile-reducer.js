import { followUsersToggleAPI, profileUserApi } from "../api/api";
import { toggleFollowingProgress, unfollowSuccess } from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {message: 'Go Eva!', likeCount: '18'},
        {message: 'Wake up Sindzy!', likeCount: 12},
        {message: 'Wake up!', likeCount: 122},
    ],
    newPostText: 'Add new post',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };

            // делаем копию стейта чтобы не нарушать принцип имьютабельности
            return {
                ...state,
                posts: [...state.posts, (newPost)],
                newPostText: ''
            };

        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        profileUserApi.getUserProfile(userId)
            .then(data => {
                console.log(data);
                dispatch(setUserProfile(data));

            });
    }
};

export default profileReducer;
