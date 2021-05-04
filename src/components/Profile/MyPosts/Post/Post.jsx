import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
            {props.message}
            <div>
                <span>{props.like_count} ❤</span>
            </div>
        </div>

    );
}

export default Post;
