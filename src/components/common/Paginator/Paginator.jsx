import React from 'react'
import s from './Paginator.module.css'


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = Array(pagesCount).fill(1).map((e, index) => index + 1) //Слишком много страниц, позже норм сделаю
    // let pages = Array(20).fill(1).map((e, index) => index + 1)
    return pages.map((p) => {
                return <span
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p ? s.selectedPage : ''}
                    key={p}
                > {p} </span>
            })

}


export default Paginator
