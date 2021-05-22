import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'be82d700-54e4-4201-a22e-d509e44f0f71',}
})

export const usersAPI = {

    getUsers(currentPage = 2, pageSize = 5) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    }
}
export const profileAPI = {

    getProfileData(userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    updateStatus(text) {
        return instance.put(`profile/status/`, {status: text})
            .then(response => {
                return response.data
            })
    },

    saveAvatarPhoto(photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(response => {
                return response.data
            })

    },

}

export const authAPI = {

    me() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    },


}
