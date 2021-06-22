import React, {useEffect} from 'react'
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import * as queryString from 'querystring'

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
import {useHistory} from "react-router";

type PropTypes = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: React.FC<PropTypes> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getIsFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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



