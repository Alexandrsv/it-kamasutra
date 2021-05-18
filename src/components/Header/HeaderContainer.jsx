import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthUserData, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props} />

        )
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
