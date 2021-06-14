import React from 'react';
import s from './Friends.module.css'

const Friends = () => {
    return (
        <div className={s.friends}>
            <div>Friends:</div>
            <div className={s.images}>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
                <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
            </div>
        </div>
    );
};

export default Friends;
