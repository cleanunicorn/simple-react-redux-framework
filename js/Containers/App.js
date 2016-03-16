import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
    render () {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                {state.todos.map(
                    (todo) => {
                        return (
                            <div key={todo.id}>{todo.text}</div>
                        )
                    }
                )}
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App
