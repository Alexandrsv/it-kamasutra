import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getStatus, getUserProfileData, updateStatus} from '../../redux/profile-reducer'
import {withRouter} from 'react-router';
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.getUserProfileData(userId)
        this.props.getStatus(userId)
    }


    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)
