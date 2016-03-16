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

        console.log(state)

        return (
            <div>
                <input
                    type="text"
                    ref="name"
                    value={state.input.value}
                    onChange={(e) => {
                        store.dispatch(Actions.updateInput(e.target.value))
                    }}
                    />
                <button
                    onClick={(e) => {
                        store.dispatch(Actions.addTodo(this.refs.name.value))
                        store.dispatch(Actions.emptyInput())
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
