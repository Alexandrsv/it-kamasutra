import React from 'react'
import {connect} from 'react-redux'
import {FilterT, follow, requestUsers, unfollow} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {compose} from "redux";
import {
    getCurrentPage,
    getFilter,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";
import {UserT} from "../../Types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserT>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
    filter: FilterT
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (page: number, pageSize: number, filter: FilterT) => any
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UserContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize, this.props.filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterT) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                    followingProgress={this.props.isFollowingInProgress}
                />}
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        filter: getFilter(state),
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
    }),
    // withAuthRedirect
)(UserContainer);
