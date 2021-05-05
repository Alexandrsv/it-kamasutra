import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogs.map((el) => <DialogItem id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map((el) => <Message id={el.id} message={el.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;

