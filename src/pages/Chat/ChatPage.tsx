import React, {FC, memo, UIEventHandler, useEffect, useRef, useState} from 'react';
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Link} from 'react-router-dom';
import {ChatMessageAPIType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from '../../redux/redux-store';


const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <div>
            {status === 'error' && <div>Что-то с сокетом не так, перезагрузи страницу</div>}
            <Messages/>
            <AddMessageForm/>
        </div>
    );
}

const Messages: FC<{}> = () => {
    const [isAutoscroll, setIsAutoscroll] = useState(true)
    const messages = useSelector((s: AppStateType) => s.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        isAutoscroll && messagesAnchorRef.current?.scrollIntoView({block: 'end', behavior: 'smooth'})
    }, [isAutoscroll, messages])

    const scrollHandler: UIEventHandler<HTMLDivElement> = (e) => {
        const el = e.currentTarget
        if (el.scrollHeight - el.scrollTop - 50 <= el.clientHeight) {
            !isAutoscroll && setTimeout(() => setIsAutoscroll(true), 500)
        } else {
            isAutoscroll && setIsAutoscroll(false)
        }
    }
    return (
        <div style={{height: '500px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}/>
        </div>
    );
};

const AddMessageForm: FC<{}> = () => {
    const [newMessage, setNewMessage] = useState('')
    const status = useSelector((state: AppStateType) => state.chat.status)
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
                <Button disabled={status !== 'ready'} onClick={onSendMessage}>Отправить</Button>
            </div>
        </div>
    );
};

const Message: FC<{ message: ChatMessageAPIType }> = memo(({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: '40px'}} alt="ava"/>
            <Link to={`/profile/${message.userId}`}>{message.userName} </Link>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

export default ChatPage
