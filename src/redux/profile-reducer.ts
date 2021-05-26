import {profileAPI} from "../api/api"
import {stopSubmit} from "redux-form";
import {PhotosT, PostT, ProfileT} from "../Types/types";

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'



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

const profileReducer = (state = initialState, action: any):InitialStateT => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random() * 500),
                message: action.newPostText,
                like_count: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText:''
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photosUrl
                } as ProfileT
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter((p) => {
                    return p.id !== action.postId
                })
            }
        default:
            return state
    }
}

type AddPostActionCreatorAT = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string):AddPostActionCreatorAT => ({type: ADD_POST, newPostText})

type SetUserProfileAT = {
    type: typeof SET_USER_PROFILE
    profile: ProfileT
}
export const setUserProfile = (profile:ProfileT):SetUserProfileAT => ({type: SET_USER_PROFILE, profile})

type SetStatusAT = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string):SetStatusAT => ({type: SET_STATUS, status})

type DeletePostAT = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId:number):DeletePostAT => ({type: DELETE_POST, postId})

type PhotosUrlAT = {
    type: typeof SAVE_PHOTO_SUCCESS
    photosUrl: PhotosT
}
export const savePhotoSuccess = (photosUrl:PhotosT):PhotosUrlAT => ({type: SAVE_PHOTO_SUCCESS, photosUrl})


export const getUserProfileData = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(response))
}


export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}


export const updateStatus = (status:string) => async (dispatch:any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        //
    }

}

export const saveAvatarPhoto = (photo:any) => async (dispatch:any) => {
    let response = await profileAPI.saveAvatarPhoto(photo)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (profile:ProfileT) => async (dispatch:any, getState:any) => {
    let response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.userId
    if (response.resultCode === 0) {
        dispatch(getUserProfileData(userId))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        // dispatch(stopSubmit('edit-profile', {contacts: {vk: message}})) //TODO Можно сделать вывод ошибки на конкретное поле формы
        return Promise.reject(message)
    }
}


export default profileReducer
