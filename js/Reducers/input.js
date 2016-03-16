const EMPTY_INPUT = 'EMPTY_INPUT'
const UPDATE_INPUT = 'UPDATE_INPUT'
const initialState = {
    value: 'input '
}

export default function input(state = initialState, action) {
    switch (action.type) {
        case EMPTY_INPUT:
            return { ...state,
                value: ''
            }

        case UPDATE_INPUT:
            return {
                ...state,
                value: action.value
            }

        default:
            return state
    }
}
