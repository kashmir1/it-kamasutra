const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_STRING = 'SET_STRING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    string: 'данные не загружены',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] // если идет подписка, то айдишку сюда закидываем, когда отписка - забирать
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

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    // если ис фетчинг - тру, то мы не делаем фильррацию, а в конец массива добисываем айди, который приходит в экшене
                    ? [...state.followingInProgress, action.userId]

                    // если к нам пришла подписка, то мы должны отфильтровать ненужного пользователя
                    // методом фильр мы пропускаем только ту айди, которая не равна той айди, которая пришла в экшене
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
};


export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setString = () => ({ type: SET_STRING });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export default usersReducer;
