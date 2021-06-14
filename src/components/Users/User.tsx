import React, {FC} from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar-placeholder.png'
import {NavLink} from 'react-router-dom'
import {UserT} from "../../Types/types";


type PropTypes = {
    user: UserT
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: Array<number>
}


const User: FC<PropTypes> = ({user, follow, unfollow, followingProgress}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                            Unfollow
                        </button>
                        : <button
                            disabled={followingProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                            Follow
                        </button>}

                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.city'}</div>
                <div>{'user.location.country'}</div>
            </span>
        </div>
    )
}


export default User
