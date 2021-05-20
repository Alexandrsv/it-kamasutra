import {profileAPI} from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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
                posts: [newPost,...state.posts],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter((p)=> {
                    return parseInt(p.id) !== action.postId
                })}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getUserProfileData = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileData(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer
