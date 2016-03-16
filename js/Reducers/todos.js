const ADD_TODO = 'ADD_TODO'
const initialState = [
    {
        text: 'Goddamn',
        completed: false,
        id: 0
    },
    {
        text: 'yo',
        completed: true,
        id: 1
    }

]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [{
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]

        default:
            return state
    }
}
