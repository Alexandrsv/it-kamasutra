import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getStatus, getUserProfileData, saveAvatarPhoto, saveProfile, updateStatus} from '../../redux/profile-reducer'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileT} from "../../Types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getUserProfileData: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    saveAvatarPhoto: (file: File) => void
    saveProfile: (profile: ProfileT) => Promise<any>

}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId || this.props.authorizedUserId
        if (!userId) {
            this.props.history.push('login')
        }
        this.props.getUserProfileData(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
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


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus, saveAvatarPhoto, saveProfile}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)
