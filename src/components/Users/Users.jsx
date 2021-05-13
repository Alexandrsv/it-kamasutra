import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar-placeholder.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then( response => {
            props.setUsers(response.data.items)
        })

    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" className={s.userPhoto}/></div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>
                                        Follow
                                    </button>
                                    : <button onClick={()=>{props.follow(u.id)}}>
                                        Unollow
                                    </button>}
                        
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </div>)}
            </div>
    )
}

export default Users