import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatar-placeholder.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = Array(pagesCount).fill(1).map((e, index) => index + 1) //Слишком много страниц, позже норм сделаю
    let pages = Array(20).fill(1).map((e, index) => index + 1)

    return (
        <div>
            <div className={s.pNum}>
                {pages.map((p) => {
                    return <span
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.selectedPage : ''}
                        key={p}
                    > {p} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.follow(u.id)
                                    .then(response => {
                                        // this.props.toggleIsFetching(false)
                                        if (response.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                props.unfollow(u.id)

                            }}>
                                Unofllow
                                     </button>
                            : <button onClick={() => {
                                usersAPI.unfollow(u.id)
                                    .then(response => {
                                        // this.props.toggleIsFetching(false)
                                        if (response.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })


                            }}>
                                Follow
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