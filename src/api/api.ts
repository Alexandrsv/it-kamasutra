import axios from 'axios'
import {ProfileT} from "../Types/types";

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

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {

    getProfileData(userId: number) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    updateStatus(text: string) {
        return instance.put(`profile/status/`, {status: text})
            .then(response => {
                return response.data
            })
    },

    saveProfile(profile: ProfileT) {
        return instance.put(`profile/`, profile)
            .then(response => {
                return response.data
            })
    },

    saveAvatarPhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })

    },

}


export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}
type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}


export const authAPI = {

    me() {
        return instance.get<MeResponseType>(`auth/me`,)
            .then(res => res.data)
    },

    login(email: string | null, password: string | null, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },

    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`)
            .then(res => res.data)
    },


}
export const securityAPI = {

    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`,)
            .then(response => {
                return response.data
            })
    },

}
