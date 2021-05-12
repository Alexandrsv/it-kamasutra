export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'нОрм?'},
        {id: 2, message: 'нОрм.'},
        {id: 3, message: 'нОрм!'},
    ],
    dialogs: [
        {id: '1', name: 'Alexandr'},
        {id: '2', name: 'Viktor'},
        {id: '3', name: 'Yuri'},
        {id: '4', name: 'Vladimir'},
    ],
    newMessageBody: '',
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state, 
                messages: [...state.messages, 
                            {id: Math.floor(Math.random() * 500), message: body}],
                newMessageBody: ''
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer
