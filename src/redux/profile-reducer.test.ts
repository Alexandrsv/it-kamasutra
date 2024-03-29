import profileReducer, {profileActions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Привет, ты как?', like_count: 12},
        {id: 2, message: 'Мой первый пост', like_count: 20},
    ],
    profile: null,
    status: '',
    newPostText: '',
}

it('Message of new post should be correct', () => {
    let action = profileActions.addPostActionCreator('post-test-text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('post-test-text')
})

it('New post should be added', () => {
    let action = profileActions.addPostActionCreator('post-test-text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('post-test-text')
})

it('After deleting length should be decrement', () => {
    let action = profileActions.deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

it('После удаления длинна не должна измениться, если id не корректен', () => {
    let action = profileActions.deletePost(-9999)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
    let action2 = profileActions.deletePost(100500)
    let newState2 = profileReducer(state, action2)
    expect(newState2.posts.length).toBe(2)
})


