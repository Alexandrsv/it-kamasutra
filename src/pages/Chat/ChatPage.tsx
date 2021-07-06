import React, {FC, useEffect, useState} from 'react';
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Link} from 'react-router-dom';
import {ChatMessageType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import { AppStateType } from '../../redux/redux-store';


const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
}

const Messages: FC<{  }> = () => {

    const messages = useSelector((s:AppStateType)=>s.chat.messages)

    return (
        <div style={{height: '500px', overflowY: 'auto'}}>
            {messages.map((m, i) => <Message key={i} message={m}/>)}

        </div>
    );
};

const AddMessageForm: FC<{}> = () => {
    const [newMessage, setNewMessage] = useState('')
    // const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const dispatch = useDispatch()
    const onChange = (e: any) => {
        setNewMessage(e.currentTarget.value)
    }
    const onSendMessage = () => {
        if (!!newMessage) {
            dispatch(sendMessage(newMessage))
            setNewMessage('')
        }
    }
    return (
        <div>
            <div>
                <TextArea onChange={onChange} value={newMessage}/>
            </div>
            <div>
                <Button onClick={onSendMessage}>Отправить</Button>
            </div>
        </div>
    );
};

const Message: FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: '40px'}} alt="ava"/>
            <Link to={`/profile/${message.userId}`}>{message.userName} </Link>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
};

export default ChatPage
