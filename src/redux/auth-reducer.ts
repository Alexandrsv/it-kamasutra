import {authAPI, securityAPI} from "../api/api"
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

// export type InitialStateT2 = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
//     captchaURL: string | null
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaURL: null as string | null,
}

export type InitialStateT = typeof initialState

const authReducer = (state:InitialStateT = initialState, action: any): InitialStateT => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                userId1: '123' //TODO Тут магия, так должно быть
            }
        default:
            return state
    }
}

type SetAuthUserDataPayloadAT = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}
type SetAuthUserDataAT = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataPayloadAT
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataAT => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

type GetCaptchaURLSuccessAT = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaURL: string | null }
}
export const getCaptchaURLSuccess = (captchaURL: string | null): GetCaptchaURLSuccessAT => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaURL}
})


export const getAuthUserData = () => async (dispatch: any) => {

    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaURL())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const getCaptchaURL = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaURL()
    const captchaURL = response.url
    dispatch(getCaptchaURLSuccess(captchaURL))
}


export const logout = () => async (dispatch: any) => {

    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer