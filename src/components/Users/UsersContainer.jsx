import React from 'react'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })

    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            })
    }
    
    render() {
        // debugger
        return <>
            {this.props.isFetching
                ? <Preloader />
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UserContainer)