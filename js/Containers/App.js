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

    render() {
        const {store} = this.context
        const state = store.getState()

        return (
            <div>
                <input type="text" ref="name" value={state.input.value} onKeyPress={(e) => {
                    if (e.charCode === 13) {
                        store.dispatch(Actions.addTodo(e.target.value));
                        store.dispatch(Actions.emptyInput());
                    }
                }} onChange={(e) => {
                    store.dispatch(Actions.updateInput(e.target.value));
                }} placeholder="Input something"
                />
                <button onClick={(e) => {
                    store.dispatch(Actions.addTodo(this.refs.name.value));
                    store.dispatch(Actions.emptyInput());
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
                                - {todo.completed === true
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
