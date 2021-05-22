import {profileAPI} from "../api/api"

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: "1", message: 'Привет, ты как?', like_count: 12},
        {id: "2", message: 'Мой первый пост', like_count: 20},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

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
                }
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter((p) => {
                    return parseInt(p.id) !== action.postId
                })
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photosUrl) => ({type: SAVE_PHOTO_SUCCESS, photosUrl})


export const getUserProfileData = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(response))
}


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const saveAvatarPhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.saveAvatarPhoto(photo)
    if (response.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.photos))
    }
}


export default profileReducer
