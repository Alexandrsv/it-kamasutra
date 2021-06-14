import React, {FC} from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsT} from "../../../Types/types";


const DialogItem:FC<DialogsT> = (props) => {
    return (
        <div className={s.dialog} key={props.id}>
            <NavLink to={`/dialogs/${props.id}`} >
                <img src={`https://i.pravatar.cc/80?img=${props.id}`} alt={'ava'}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
};

export default DialogItem;

