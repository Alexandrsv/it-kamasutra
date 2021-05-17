import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"
import {reduxForm} from "redux-form";
import {Field} from "redux-form/es";


const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogElements = state.dialogs.map((el) => <DialogItem id={el.id} name={el.name}/>)
    let messageElements = state.messages.map((el) => <Message id={el.id} message={el.message}/>)

    const onSendMessageClick = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
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
                        <NewMessageReduxForm onSubmit={onSendMessageClick}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}


const NewMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;

