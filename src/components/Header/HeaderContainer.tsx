import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type DispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<MapStateToPropsType & DispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
                userId={this.props.userId}
            />

        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
