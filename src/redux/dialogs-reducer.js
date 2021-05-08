export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: Math.floor(Math.random() * 500), message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer
