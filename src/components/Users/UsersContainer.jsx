import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    requestUsers,
    setCurrentPage,
    setUsers,
    toggleFollowingProgress,
    unfollow
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersTh(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersTh(this.props.currentPage, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        console.log('!!!!render')
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
                    toggleFollowing={this.props.toggleFollowingProgress}
                    followingProgress={this.props.isFollowingInProgress}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersTh: requestUsers,
    }),
    // withAuthRedirect
    )(UserContainer)
