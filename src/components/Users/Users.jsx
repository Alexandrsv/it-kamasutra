import React from 'react'
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {

    return (
        <div>
            <div className={s.pNum}>
                <Paginator totalItemsCount={props.totalUsersCount}{...props}/>
            </div>
            <div>
                {props.users.map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}
                                            followingProgress={props.followingProgress}/>)}
            </div>
        </div>
    )
}


export default Users
