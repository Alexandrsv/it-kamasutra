import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Привет, ты как?'} like_count={12}/>
                <Post message={'Мой первый пост'} like_count={20}/>
            </div>
        </div>
    );
};

export default MyPosts;
