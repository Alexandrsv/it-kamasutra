import React from 'react';
import {connect} from 'react-redux';
import {dialogsActions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
    
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {...dialogsActions}),
    withAuthRedirect,
)(Dialogs);

