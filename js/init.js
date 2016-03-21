import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App'
import { createStore } from 'redux'
import Reducer from './Reducers/'
import { Router, Route, hashHistory } from 'react-router'

const store = createStore(Reducer)

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/repos" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
