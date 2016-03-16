import todos from './todos'
import input from './input'
import { combineReducers } from 'redux'


const Reducer = combineReducers({
    todos,
    input
})

export default Reducer
