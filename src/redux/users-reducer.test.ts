import usersReducer, {InitialStateT, usersActions} from "./users-reducer";
import {UserT} from "../Types/types";

let state: InitialStateT

beforeEach(()=>{
    state = {
        users: [
            {id: 0, name: 'Криптополк 0', followed: false, photos: {small: null, large: null}, status: 'Tagruato'},
            {
                id: 1,
                name: 'Криптополк 1',
                followed: false,
                photos: {small: null, large: null},
                status: 'Yoshida Medical Research'
            },
            {
                id: 2,
                name: 'Криптополк 2',
                followed: true,
                photos: {small: null, large: null},
                status: 'Tagruato Corporation'
            },
            {id: 3, name: 'Криптополк 3', followed: true, photos: {small: null, large: null}, status: 'Bold Futura'},
        ] as Array<UserT>,
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as Array<number>, //array of userId
    }
})

test('follow success', () => {
    const newState = usersReducer(state, usersActions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
    const newState = usersReducer(state, usersActions.unfollowSuccess(3))
    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()

})

