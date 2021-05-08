import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e) => {
        let text = e.target.value
        let action = updateNewPostTextCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map((el) => <Post id={el.id} key={el.id} message={el.message}
                                               like_count={el.like_count}/>)}
            </div>
        </div>
    );
};

export default MyPosts;
