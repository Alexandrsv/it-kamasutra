import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {Users} from './Users'
import Preloader from '../common/Preloader/Preloader'
import {getIsFetching,} from "../../redux/users-selectors";

type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: FC<UsersPagePropsType> = () => {

    const isFetching = useSelector(getIsFetching)

    return <>
            {isFetching && <Preloader/>}
            <Users/>
    </>
}


