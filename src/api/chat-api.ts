export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: statusType) => void


let ws: WebSocket | null
type eventsNamesType = 'messages-received' | 'status-changed'


const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessage))
}
const openHandler = () => notifySubscribersAboutStatus('ready')
const errorHandler = () => {
    console.log('WS ERROR')
    notifySubscribersAboutStatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: statusType) => subscribers['status-changed'].forEach(s => s(status))

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
    ws?.addEventListener('open', openHandler)
    ws?.addEventListener('error', errorHandler)
}

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: eventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType | null) {
        //@ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: eventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType | null) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

export type statusType = 'pending' | 'ready' | 'error'

