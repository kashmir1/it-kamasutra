import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '2ffdfc84-666a-4bdd-8ed9-1dc48a38d879'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    unfollowUser (id) {
        return instance.delete(`follow/` + id)
            .then(response => {
                return response.data
            })
    },
    followUser (id) {
        return instance.post(`follow/` + id, {})
            .then(response => {
                return response.data
            })
    }
};

export const authAPI = {
    getProfileName () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}
