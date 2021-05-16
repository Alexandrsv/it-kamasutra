import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUserProfileData} from '../../redux/profile-reducer'
import {withRouter} from 'react-router';
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.getProfileData(userId)
    }


    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
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
        isAuth: state.auth.isAuth,

    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileData: getUserProfileData})(WithUrlDataContainerComponent);
