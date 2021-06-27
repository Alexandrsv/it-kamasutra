import React, {FC, useEffect, useState} from 'react';
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Link} from 'react-router-dom';


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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>()

    useEffect(() => {
        let ws: WebSocket

        const closeHandler = () => {
            console.log('Close WS')
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws?.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    );
}

const Messages: FC<{ wsChannel: WebSocket | null | undefined }> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessage = JSON.parse(e.data);
            console.log(newMessage)
            setMessages((pervMess) => [...pervMess, ...newMessage])
        };
        wsChannel?.addEventListener('message', messageHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

    return (
        <div style={{height: '500px', overflowY: 'auto'}}>
            {messages.map((m, i) => <Message key={i} message={m}/>)}

        </div>
    );
};

const AddMessageForm: FC<{ wsChannel: WebSocket | null | undefined }> = ({wsChannel}) => {
    const [newMessage, setNewMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => setReadyStatus('ready');
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const onChange = (e: any) => {
        setNewMessage(e.currentTarget.value)
    }
    const sendMessage = () => {
        if (!!newMessage) {
            wsChannel?.send(newMessage)
            setNewMessage('')
        }
    }
    return (
        <div>
            <div>
                <TextArea onChange={onChange} value={newMessage}/>
            </div>
            <div>
                <Button disabled={readyStatus == null || readyStatus !== 'ready'}
                        onClick={sendMessage}>Отправить</Button>
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
