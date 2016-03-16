import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../Actions'

class App extends Component {
    componentDidMount () {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentWillUmount () {
        this.unsubscribe()
    }

    render () {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                <input
                    type="text"
                    ref="name"
                    />
                <button
                    onClick={(e) => {
                        store.dispatch(Actions.addTodo(this.refs.name.value))

                        this.refs.name.value = ''
                    }}>
                    Add todo
                </button>

                <ol>
                    {state.todos.map(
                        (todo) => {
                            return (
                                <li key={todo.id}>{todo.text}</li>
                            )
                        }
                    )}
                </ol>
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App
