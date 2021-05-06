import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }
    let newPostElement = React.createRef()

    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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
