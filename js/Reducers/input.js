const EMPTY_INPUT = 'EMPTY_INPUT'
const UPDATE_INPUT = 'UPDATE_INPUT'
const initialState = {
    value: 'input '
}

export default function input(state = initialState, action) {
    switch (action.type) {
        case EMPTY_INPUT:
            let {state} = state
            state.value = ''

            console.log(state)
            return state

        case UPDATE_INPUT:
            return {
                state,
                value: action.text
            }

        default:
            return state
    }
}
