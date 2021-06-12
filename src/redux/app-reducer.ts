import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

let initialState = {
    initialized: false
}

export type InitialStateT = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateT => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


export const actions = {
    setInitializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS' as const})
}




export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = [dispatch(getAuthUserData())]
        Promise.all([promise])
            .then(() => {
                dispatch(actions.setInitializedSuccess())
            })

    }
}


export default appReducer
