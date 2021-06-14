import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {InitialStateT} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateT
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage
    let dialogElements = state.dialogs.map((el) => <DialogItem id={el.id} key={el.id} name={el.name}/>)
    let messageElements = state.messages.map((el) => <Message id={el.id} key={el.id} message={el.message}/>)

    const onSendMessageClick: any = (formData: NewMessageFormType) => {
        props.sendMessage(formData.newMessageBody)
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
                        <AddMessageForm onSubmit={onSendMessageClick}/>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Dialogs;

