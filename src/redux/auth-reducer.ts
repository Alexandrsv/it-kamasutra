import {ResultCodesEnum, ResultCodeForCaptchaEnum} from "../api/api"
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaURL: null as string | null,
}

export type InitialStateT = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const authReducer = (state: InitialStateT = initialState, action: ActionsTypes): InitialStateT => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const actions = {

    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const),

    getCaptchaURLSuccess: (captchaURL: string | null) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaURL}
    } as const),

}


export const getAuthUserData = (): ThunkType => async (dispatch) => {

    let response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}


export const login = (email: null | string, password: string | null, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else if (response.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaURL())
    } else {
        let message = response.messages.length > 0 ? response.messages : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const getCaptchaURL = (): ThunkType => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL()
    const captchaURL = response.url
    dispatch(actions.getCaptchaURLSuccess(captchaURL))
}


export const logout = (): ThunkType => async (dispatch) => {

    let response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}


export default authReducer
