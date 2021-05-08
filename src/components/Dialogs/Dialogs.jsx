import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map((el) => <DialogItem id={el.id} name={el.name}/>)
    let messageElements = state.messages.map((el) => <Message id={el.id} message={el.message}/>)

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea
                            value={state.newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Напиши сообщение'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;

