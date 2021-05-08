let store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: 'Привет, ты как?', like_count: 12},
                {id: "2", message: 'Мой первый пост', like_count: 20},
            ],
            newPostText: 'Win!',
        },
        messagePage: {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like_count: 0
            }
            this._state.profilePage.posts.push(newPost)
            this.dispatch({type:'UPDATE-NEW_POST_TEXT', newText:''})
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
            console.log(this._state)
        }
    },
}

window.state = store

export default store;
