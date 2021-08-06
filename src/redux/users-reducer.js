const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmVLKyxZtMLSqnnMnpa0UFZELckUhP1mPA9JiF_XBbuVo8aMALPGE6G7C70gH0FqqMiY&usqp=CAU',
            followed: true,
            fullName: 'Uliana',
            status: 'Let it go',
            location: { city: 'New-York', country: 'USA' }
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKuIjHSJLskQtOlqs0yU4UB6C5dtHDh-UMnWeqQuSvSKVmaLWixBzfmq1o_WlXGH1XkE&usqp=CAU',
            followed: true,
            fullName: 'Alexey',
            status: 'Let it go coding',
            location: { city: 'LA', country: 'USA' }
        },
        {
            id: 3,
            photoUrl: 'https://lh3.googleusercontent.com/proxy/WVAQ3I2VtzPjhdq1DpchwyAn6CTqniHs5DKJNya-JsWpHuK6vT60HaarCRWnd2kmOgT8gS88EmNZ--CIW1hmiMQSlUJZCFJuUKTQWvap-knDlWmsaBklxSlnZVobvAeK2dkbJ-CISpdZOsa5FVSqEyZdWLWWpQJVuGkLqkCok9msQQ',
            followed: true,
            fullName: 'Marianna',
            status: 'Shooting',
            location: { city: 'San-Francisco', country: 'USA' }
        },
        {
            id: 4,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfM2BdMK_u78DMeQ3TiZQSs5GUzeqxk7sSuKVBL-tF5ZvfW5Foo1EylfEPSK7PT7bEqKI&usqp=CAU',
            followed: false, fullName: 'Elsa', status: 'Frozen', location: { city: 'Erendel', country: 'North' }
        },
    ],
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

        case SET_USERS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };


        default:
            return state;
    }
};


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;
