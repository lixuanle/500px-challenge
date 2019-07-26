export const pictures = (state = [], action) => {
    switch(action.type) {
        case('GET_PICTURES'):
            return [...action.payload]
        default:
            return state
    }
}