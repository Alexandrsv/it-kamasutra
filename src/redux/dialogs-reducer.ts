export const SEND_MESSAGE = 'SEND_MESSAGE'

type MessagesT = {
    id: number
    message: string
}

type DialogsT = {
    id: number
    name: string
}

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

export const dialogsReducer = (state = initialState, action: any): InitialStateT => {
    switch (action.type) {
        case SEND_MESSAGE:
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

type sendMessageCreatorAT = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorAT => ({
    type: SEND_MESSAGE,
    newMessageBody
})

export default dialogsReducer
