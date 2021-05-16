import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUserProfileData} from '../../redux/profile-reducer'
import {withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.getProfileData(userId)
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
    }
}


export default compose(
    connect(mapStateToProps, {getProfileData: getUserProfileData}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)
