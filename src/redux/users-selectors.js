export const getUsers = (state) => {
    return state.usersPage.users;
};

export const getString = (state) => {
    return state.usersPage.string;
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getisFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getfollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
