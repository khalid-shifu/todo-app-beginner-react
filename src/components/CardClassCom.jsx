import React, { Component } from 'react';

class CardClassCom extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.description}</h2>
            </div>           
        );
    }
}

export default CardClassCom;