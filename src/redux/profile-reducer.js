const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: "1", message: 'Привет, ты как?', like_count: 12},
        {id: "2", message: 'Мой первый пост', like_count: 20},
    ],
    newPostText: 'Win!',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random() * 500),
                message: state.newPostText,
                like_count: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText:action.newText}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
