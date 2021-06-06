import React from 'react'
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserT} from "../../Types/types";

type PropTypes = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserT>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingProgress: Array<number>
}

let Users: React.FC<PropTypes> = ({
                                      totalUsersCount,
                                      pageSize,
                                      currentPage,
                                      users,
                                      unfollow,
                                      follow,
                                      onPageChanged,
                                      followingProgress
                                  }) => {
    return (
        <div>
            <div className={s.pNum}>
                <Paginator totalItemsCount={totalUsersCount}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           pageSize={pageSize}
                />
            </div>
            <div>
                {users.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow}
                                      followingProgress={followingProgress}/>)}
            </div>
        </div>
    )
}


export default Users
