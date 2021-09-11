import { authUsersAPI, followUsersToggleAPI } from "../api/api";
import { toggleFollowingProgress, unfollowSuccess } from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data, // ... потому что объект?
                isAuth: true

            }
        }


        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login) =>  ({ type: SET_USER_DATA, data: {userId, email, login}});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserData = () => {
    return (dispatch) => {
        authUsersAPI.getUserName()
            .then(data => {
                //Проверка - если в дате сидит resultCode = 0 (все хорошо, мы залогинены), кто в этом случае мы диспатчим авторизационные данные
                if (data.resultCode === 0) { // тут был косяк, 0 - число, а я указал строку
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};




export default authReducer;
