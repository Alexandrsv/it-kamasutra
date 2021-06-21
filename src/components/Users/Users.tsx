import React, {useEffect} from 'react'
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterT, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type PropTypes = {}

export const Users: React.FC<PropTypes> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getIsFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(requestUsers(1, pageSize, filter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterT) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <div className={s.pNum}>

                <Paginator totalItemsCount={totalUsersCount}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           pageSize={pageSize}
                />
            </div>
            <div>
                {users.map(u => <User key={u.id} user={u} follow={onFollow} unfollow={onUnfollow}
                                      followingProgress={followingProgress}/>)}
            </div>
        </div>
    )
}



