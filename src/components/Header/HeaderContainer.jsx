import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        usersAPI.authMe()
            .then(response => {
                // this.props.toggleIsFetching(false)
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data
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
