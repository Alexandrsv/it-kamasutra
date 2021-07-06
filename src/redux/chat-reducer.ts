import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageType} from "../api/chat-api";
import {Dispatch} from "redux";


let initialState = {
    messages: [] as ChatMessageType[],

}

export type InitialStateT = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const chatReducer = (state: InitialStateT = initialState, action: ActionsTypes): InitialStateT => {
    switch (action.type) {
        case 'chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        default:
            return state
    }
}

export const actions = {

    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'chat/MESSAGES_RECEIVED',
        payload: {messages}
    } as const),
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async () => {
    chatAPI.sendMessage(message)
}


export default chatReducer
