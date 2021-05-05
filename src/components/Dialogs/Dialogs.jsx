import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={'1'} name={'Alexandr'}/>
                <DialogItem id={'2'} name={'Viktor'}/>
                <DialogItem id={'3'} name={'Yuri'}/>
                <DialogItem id={'4'} name={'Vladimir'}/>
            </div>
            <div className={s.messages}>
                <Message message={'нОрм?'}/>
                <Message message={'нОрм.'}/>
                <Message message={'нОрм!'}/>
            </div>
        </div>
    );
};

export default Dialogs;

