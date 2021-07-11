import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageAPIType, statusType} from "../api/chat-api";
import {Dispatch} from "redux";
import {v1} from 'uuid'

let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as statusType,

}

export type InitialStateT = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ChatMessageType = ChatMessageAPIType & { id: string }

const chatReducer = (state: InitialStateT = initialState, action: ActionsTypes): InitialStateT => {
    switch (action.type) {
        case 'chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].slice(-100),
            }
        case 'chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state
    }
}

export const actions = {

    messagesReceived: (messages: ChatMessageAPIType[]) => ({
        type: 'chat/MESSAGES_RECEIVED',
        payload: {messages}
    } as const),
    statusChanged: (status: statusType) => ({
        type: 'chat/STATUS_CHANGED',
        payload: {status}
    } as const),
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageAPIType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: statusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async () => {
    chatAPI.sendMessage(message)
}


export default chatReducer
