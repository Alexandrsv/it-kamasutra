import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: "1", message: 'Привет, ты как?', like_count: 12},
            {id: "2", message: 'Мой первый пост', like_count: 20},
        ],
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

export const addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        like_count: 0
    }
    state.profilePage.posts.push(newPost)
    console.log('STATE',state)
    rerenderEntireTree(state)
}

export default state;
