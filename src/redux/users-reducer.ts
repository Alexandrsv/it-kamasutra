import {updateObjectInArray} from "../utils/object-helpers";
import {UserT} from "../Types/types";
import {Dispatch} from "redux";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";
import {APIResponseType} from "../api/api";


let initialState = {
    users: [] as Array<UserT>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    filter: {term: '', friend: false as boolean | null},
    followingInProgress: [] as Array<number>, //array of userId
}

export type InitialStateT = typeof initialState
export type FilterT = typeof initialState.filter
type ThunkType = BaseThunkType<ActionsTypes>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateT => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'users/SET_USERS':
            return {...state, users: action.users}
        case 'users/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'users/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'users/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/SET_FILTER':
            return {...state, filter: action.payload}
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


type ActionsTypes = InferActionsTypes<typeof usersActions>

export const usersActions = {
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'users/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserT>) => ({type: 'users/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'users/SET_CURRENT_PAGE', currentPage} as const),
    setFilter: (filter: FilterT) => ({type: 'users/SET_FILTER', payload: filter} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'users/SET_TOTAL_USERS_COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}


export const requestUsers = (page: number, pageSize: number, filter: FilterT): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true))
    dispatch(usersActions.setCurrentPage(page))
    dispatch(usersActions.setFilter(filter))
    let response = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(usersActions.toggleIsFetching(false))
    dispatch(usersActions.setUsers(response.items))
    dispatch(usersActions.setTotalUsersCount(response.totalCount))
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(usersActions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingProgress(false, userId))
}


export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
}


export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
}


export default usersReducer
