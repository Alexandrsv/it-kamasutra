import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: { 'API-KEY': 'be82d700-54e4-4201-a22e-d509e44f0f71', }
        })
            .then(response => {
                // this.props.toggleIsFetching(false)
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })


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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
