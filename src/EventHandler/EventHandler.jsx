import React, { Component } from 'react'

class EventHandler extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }
    

    handleClick = () => {
        alert('Button clicked!')
    }

    handleOnChange = (e) => {
        this.setState({
            changedValue: e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
        console.log(this.state.changedValue) // this will be empty because setState is asynchronous
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your name" onChange={this.handleOnChange} />
                <p>{this.state.changedValue}</p>
                <button onClick={this.handleClick}>click here</button>
            </div>
        )
    }
}

export default EventHandler