import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authMe } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, { authMe })(HeaderContainer);
