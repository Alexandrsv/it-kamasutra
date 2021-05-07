let rerenderEntireTree = () => {
    console.log('rerenderEntireTree')
}


let state = {
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


}

window.state = state

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like_count: 0
    }
    state.profilePage.posts.push(newPost)
    updateNewPostText('')
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
    console.log(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;
