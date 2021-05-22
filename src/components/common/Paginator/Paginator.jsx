import React from 'react'
import s from './Paginator.module.css'


let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = Array(pagesCount).fill(1).map((e, index) => index + 1)
    const sliceRange = 5
    const halfRange = Math.ceil(sliceRange / 2)
    let sliceStart = currentPage <= halfRange ? 0 : currentPage - halfRange
    pages = pages.slice(sliceStart, currentPage + halfRange)

    const nextChunk = (step) => {
        if ((currentPage + step) > pagesCount) {
            onPageChanged(pagesCount - halfRange)
        } else if ((currentPage + step) < 0) {
            onPageChanged(halfRange)
        } else {
            onPageChanged(currentPage + step)
        }

    }

    return <div className={s.paginator}>
        <span onClick={() => nextChunk(-100)}>{'<100'}</span>&nbsp;
        <span onClick={() => nextChunk(-10)}>{'<10'}&nbsp;&nbsp;&nbsp;</span>
        {pages.map((p) => {
            return <span
                onClick={() => onPageChanged(p)}
                className={currentPage === p ? s.selectedPage : ''}
                key={p}
            > {p} </span>

        })}
        <span onClick={() => nextChunk(10)}>&nbsp;&nbsp;&nbsp;{'10>'}</span>&nbsp;
        <span onClick={() => nextChunk(100)}>{'100>'}</span>
    </div>

}

export default Paginator
