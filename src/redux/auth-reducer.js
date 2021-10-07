import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
                ...action.payload, // ... потому что объект?

            }
        }


        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getProfileName()
        .then(data => {
            //Проверка - если в дате сидит resultCode = 0 (все хорошо, мы залогинены), кто в этом случае мы диспатчим авторизационные данные
            if (data.resultCode === 0) { // тут был косяк, 0 - число, а я указал строку
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            //Проверка - если в дате сидит resultCode = 0 (все хорошо, мы залогинены), кто в этом случае мы диспатчим авторизационные данные
            if (response.data.resultCode === 0) { // тут был косяк, 0 - число, а я указал строку
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            //Проверка - если в дате сидит resultCode = 0 (все хорошо, мы залогинены), кто в этом случае мы диспатчим авторизационные данные
            if (response.data.resultCode === 0) { // тут был косяк, 0 - число, а я указал строку
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};


export default authReducer;
