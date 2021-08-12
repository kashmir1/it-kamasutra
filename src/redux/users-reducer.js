const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_STRING = 'SET_STRING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    string: 'данные не загружены',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                // берем старый стейт
                ...state,
                // берем юзеров из стейта и затираем их теми которые пришли в экшене
                // склеиваем 2 массива из тех которые были в стейте, и тех, которые приши в экшене
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_STRING: {
            return {
                ...state,
                string: 'данные загружены'
            };
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }


        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }

        default:
            return state;
    }
};


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setStringAC = () => ({ type: SET_STRING });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });


export default usersReducer;
