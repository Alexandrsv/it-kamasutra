let initialState = {
    qwe: 123
}
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case '123':
            return state
        default:
            return state
    }
}

export default sidebarReducer
