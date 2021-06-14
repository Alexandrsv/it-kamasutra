import React, {FC} from 'react';
import s from './Message.module.css'
import {MessagesT} from "../../../Types/types";


const Message:FC<MessagesT> = (props) => {
    return (
        <div className={s.message} key={props.id}>
            {props.message}
        </div>
    )
};

export default Message;

