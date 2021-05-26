let initialState = {
    qwe: 123
}

type InitialStateT = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateT => {
    switch (action.type) {
        case '123':
            return {
                ...state,
                qwe: state.qwe + 1
            }
        default:
            return state
    }
}

export default sidebarReducer
