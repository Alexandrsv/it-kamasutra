import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import StoreContext from '../../../StreContext';
import MyPosts from "./MyPosts";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action)
                }
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
            )}}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
