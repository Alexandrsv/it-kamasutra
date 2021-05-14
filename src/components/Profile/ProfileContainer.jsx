import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
    componentDidMount() {

        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })


    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
    profile: state.profilePage.profile
    
}}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
