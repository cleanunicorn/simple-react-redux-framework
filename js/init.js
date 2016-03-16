import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App'
import { createStore } from 'redux'
import Reducer from './Reducers/'
import { addTodo } from './Actions/'

const store = createStore(Reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
