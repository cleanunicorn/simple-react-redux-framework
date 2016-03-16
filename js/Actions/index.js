import * as types from '../Constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}
