import {InferActionsTypes} from "./redux-store";
import {DialogsT, MessagesT} from "../Types/types";

let initialState = {
    messages: [
        {id: 1, message: 'нОрм?'},
        {id: 2, message: 'нОрм.'},
        {id: 3, message: 'нОрм!'},
    ] as Array<MessagesT>,
    dialogs: [
        {id: 1, name: 'Alexandr'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Yuri'},
        {id: 4, name: 'Vladimir'},
    ] as Array<DialogsT>,
}

export type InitialStateT = typeof initialState
type ActionsTypes = InferActionsTypes<typeof dialogsActions>


export const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateT => {
    switch (action.type) {
        case 'dialogs/SEND_MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,
                    {id: Math.floor(Math.random() * 500), message: body}],
            }
        default:
            return state
    }
}

export const dialogsActions = {
    sendMessage: (newMessageBody: string) => ({type: 'dialogs/SEND_MESSAGE', newMessageBody} as const)
}


export default dialogsReducer
