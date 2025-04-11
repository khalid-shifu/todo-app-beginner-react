import React, { Component } from 'react'


class EventBinding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleIncrementBind() {
        this.setState({
            count: this.state.count + 2
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrementBind.bind(this)}>Increment</button>
            </div>
        )
    }
}

export default EventBinding