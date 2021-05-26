import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateT = {
    initialized: boolean
}

let initialState: InitialStateT = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateT => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type InitializedSuccessAT = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): InitializedSuccessAT => ({
    type: INITIALIZED_SUCCESS,
})


export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = [dispatch(getAuthUserData())]
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccess())
            })

    }
}


export default appReducer
