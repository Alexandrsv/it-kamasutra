import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: "1", photoUrl: 'https://i.pravatar.cc/80?img=1', followed: true, fullName: 'Дмитрий', status: 'Вечно молодой', location: {city: 'Минск', country:'Россия'}},
            {id: "2", photoUrl: 'https://i.pravatar.cc/80?img=2', followed: false, fullName: 'Бронислав', status: 'Счастье для всех даром!', location: {city: 'Варшава', country:'Россия'}},
        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} alt="avatar" className={s.userPhoto}/></div>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)}
            </div>
    )
}

export default Users