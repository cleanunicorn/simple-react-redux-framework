import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../Actions'

class App extends Component {
    componentDidMount() {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentWillUmount() {
        this.unsubscribe()
    }

    addNewTodo(text) {
        const {store} = this.context;

        if (text.trim() === '') {
            return
        }

        store.dispatch(Actions.addTodo(text));
        store.dispatch(Actions.emptyInput());
    }

    render() {
        const {store} = this.context
        const state = store.getState()

        return (
            <div>
                <input onClick={(e) => {
                        store.dispatch(Actions.updateInput(Math.random()));
                    }} />
                <input type="text" ref="name" value={state.input.value} onKeyPress={(e) => {
                    if (e.charCode === 13) {
                        this.addNewTodo(e.target.value)
                    }
                }} onChange={(e) => {
                    store.dispatch(Actions.updateInput(e.target.value));
                }} placeholder="Input something"
                />
                <button onClick={(e) => {
                    this.addNewTodo(this.refs.name.value)
                }}>
                    Add todo
                </button>

                <ol>
                    {state.todos.map((todo) => {
                        return (
                            <li key={todo.id} onClick={(e) => {
                                store.dispatch(Actions.toggleTodo(todo.id))
                            }}>
                                {todo.text}
                                -> {todo.completed === true
                                    ? 'yes'
                                    : 'no'}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App
