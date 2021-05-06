import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src={`https://i.pravatar.cc/80?img=${props.id}`} alt={'ava'}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
};

export default DialogItem;

