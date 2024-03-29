import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent:React.FC<MapPropsType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as WCP}/>
    }
    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

}
