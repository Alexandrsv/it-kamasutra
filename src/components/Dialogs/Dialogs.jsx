import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogs = [
        {id: '1', name: 'Alexandr'},
        {id: '2', name: 'Viktor'},
        {id: '3', name: 'Yuri'},
        {id: '4', name: 'Vladimir'},
    ]
    let messages = [
        {id: 1, message: 'нОрм?'},
        {id: 2, message: 'нОрм.'},
        {id: 3, message: 'нОрм!'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogs.map((el) => <DialogItem id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {messages.map((el) => <Message id={el.id} message={el.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;

