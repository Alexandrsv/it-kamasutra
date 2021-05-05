import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: "1", message: 'Привет, ты как?', like_count: 12},
        {id: "2", message: 'Мой первый пост', like_count: 20},
    ]
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
                {posts.map((el) => <Post id={el.id} message={el.message} like_count={el.like_count}/>)}
            </div>
        </div>
    );
};

export default MyPosts;
