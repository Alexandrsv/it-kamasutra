import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from '../../StreContext';
import Dialogs from "./Dialogs";


const DialogsContainer = () => {

    return ( 
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return (
                    <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                    />)
                    }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;

