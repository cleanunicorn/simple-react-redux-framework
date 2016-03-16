const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const initialState = [{
        text: 'Goddamn',
        completed: false,
        id: 0
    }, {
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

        case TOGGLE_TODO:
            console.log(state)
            return state.map(
                (todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                }
            )

        default:
            return state
    }
}
