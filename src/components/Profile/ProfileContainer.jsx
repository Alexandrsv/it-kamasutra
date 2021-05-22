import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getStatus, getUserProfileData, saveAvatarPhoto, updateStatus} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.authorizedUserId
        if (!userId) {
            this.props.history.push('login')
        }
        this.props.getUserProfileData(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         isOwner={!this.props.match.params.userId || (String(this.props.authorizedUserId) === this.props.match.params.userId)}
                         saveAvatarPhoto={this.props.saveAvatarPhoto}
                />
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus, saveAvatarPhoto}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)
