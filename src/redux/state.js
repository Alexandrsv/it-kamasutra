import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: 'Привет, ты как?', like_count: 12},
                {id: "2", message: 'Мой первый пост', like_count: 20},
            ],
            newPostText: 'Win!',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'нОрм?'},
                {id: 2, message: 'нОрм.'},
                {id: 3, message: 'нОрм!'},
            ],
            dialogs: [
                {id: '1', name: 'Alexandr'},
                {id: '2', name: 'Viktor'},
                {id: '3', name: 'Yuri'},
                {id: '4', name: 'Vladimir'},
            ],
            newMessageBody: '',
        },
        sidebar: {}


    },
    _callSubscriber() {
        console.log('rerenderEntireTree')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}



window.state = store

export default store;
