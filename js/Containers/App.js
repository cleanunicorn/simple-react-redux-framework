import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                hello
            </div>
        )
    }
}

App.propTypes = {
}

export default App
