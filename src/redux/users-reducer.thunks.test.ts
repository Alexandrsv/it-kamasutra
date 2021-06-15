import {follow, unfollow, usersActions} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock('../api/users-api')

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    data: {},
    messages: [],
}
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    usersAPIMock.follow.mockClear()
    usersAPIMock.unfollow.mockClear()
})


test('success follow thunk', async () => {

    const userId = 1
    const thunk = follow(userId)
    usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.followSuccess(userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, userId))
})


test('success unfollow thunk', async () => {

    const userId = 1
    const thunk = unfollow(userId)
    usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unfollowSuccess(userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, userId))
})

