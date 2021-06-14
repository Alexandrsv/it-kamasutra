import React from 'react';
import s from './Post.module.css';
import {PostT} from "../../../../Types/types";

const Post = (props:PostT) => {
    return (

        <div className={s.item}>
            <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
            <span className={s.text}>{props.message}</span>
            <div>
                <span>{props.like_count} ❤</span>
            </div>
        </div>

    );
}

export default Post;
