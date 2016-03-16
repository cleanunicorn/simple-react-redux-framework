import * as types from '../Constants/ActionTypes'

export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        text
    }
}

export function emptyInput() {
    return {
        type: types.EMPTY_INPUT
    }
}

export function updateInput (text) {
    return {
        type: types.UPDATE_INPUT,
        value: text
    }
}

export function toggleTodo (todo) {
    return {
        type: types.TOGGLE_TODO,
        id: todo 
    }
}
