import {FormAction, stopSubmit} from "redux-form";
import {PhotosT, PostT, ProfileT} from "../Types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {ResultCodesEnum} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Привет, ты как?', like_count: 12},
        {id: 2, message: 'Мой первый пост', like_count: 20},
    ] as Array<PostT>,
    profile: null as ProfileT | null,
    status: '',
    newPostText: '',
}

export type InitialStateT = typeof initialState


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateT => {

    switch (action.type) {
        case 'profile/ADD-POST':
            let newPost = {
                id: Math.floor(Math.random() * 500),
                message: action.newPostText,
                like_count: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'profile/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET_STATUS':
            return {...state, status: action.status}
        case 'profile/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photosUrl
                } as ProfileT
            }
        case 'profile/DELETE_POST':
            return {
                ...state, posts: state.posts.filter((p) => {
                    return p.id !== action.postId
                })
            }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof profileActions>
export const profileActions = {
    addPostActionCreator: (newPostText: string) => ({type: 'profile/ADD-POST', newPostText} as const), //TODO: Эта часть не актуальная, т.к работает через стороннюю либу
    setUserProfile: (profile: ProfileT) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'profile/DELETE_POST', postId} as const),
    savePhotoSuccess: (photosUrl: PhotosT) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photosUrl} as const),
}

type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export const getUserProfileData = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfileData(userId)
    dispatch(profileActions.setUserProfile(response))
}


export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(profileActions.setStatus(response))
}


export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.setStatus(status))
        }
    } catch (e) {
        //
    }

}

export const saveAvatarPhoto = (photo: File): ThunkType => async (dispatch) => {
    let response = await profileAPI.saveAvatarPhoto(photo)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(profileActions.savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (profile: ProfileT): ThunkType => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.userId
    if (response.resultCode === ResultCodesEnum.Success) {
        if (userId!=null) {
            dispatch(getUserProfileData(userId))
        } else throw Error('userId не можут быть пустым!')
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        // dispatch(stopSubmit('edit-profile', {contacts: {vk: message}})) //TODO Можно сделать вывод ошибки на конкретное поле формы
        return Promise.reject(message)
    }
}


export default profileReducer
