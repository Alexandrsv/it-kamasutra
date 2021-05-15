import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'be82d700-54e4-4201-a22e-d509e44f0f71', }
})

export const usersAPI = {

    getUsers(currentPage = 2, pageSize = 5) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`,)
            .then(response => { return response.data })
    },

    getProfileData(userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => { return response.data })
    },

    authMe(userId) {
        return instance.get(`auth/me`,)
            .then(response => { return response.data })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
            .then(response => { return response.data })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`,)
            .then(response => { return response.data })
    }
}