import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from 'react-router-dom';


const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
}

const Messages: FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            const newMessage = JSON.parse(e.data);
            console.log(newMessage)
            setMessages((pervMess) => [...pervMess, ...newMessage])
        })
    }, [])
    return (
        <div style={{height: '500px', overflowY: 'auto'}}>
            {messages.map((m, i) => <Message key={i} message={m}/>)}

        </div>
    );
};

const AddMessageForm: FC = () => {
    const [newMessage,setNewMessage]=useState('')

    const onChange=(e:any)=>{
        setNewMessage(e.currentTarget.value)
    }
    const sendMessage=()=>{
        if(!!newMessage) {
            wsChannel.send(newMessage)
            setNewMessage('')
        }
    }
    return (
        <div>
            <div>
                <TextArea onChange={onChange} value={newMessage}/>
            </div>
            <div>
                <Button onClick={sendMessage}>Отправить</Button>
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
