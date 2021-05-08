export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST_TEXT'
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
        }


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like_count: 0
            }
            this._state.profilePage.posts.push(newPost)
            this.dispatch({type: UPDATE_NEW_POST_TEXT, newText: ''})
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({id: 6, message:body})
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        }
    },
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

window.state = store

export default store;
