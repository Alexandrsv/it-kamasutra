import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

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
                {props.posts.map((el) => <Post id={el.id} message={el.message} like_count={el.like_count}/>)}
            </div>
        </div>
    );
};

export default MyPosts;
