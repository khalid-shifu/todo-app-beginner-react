import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

export default class State extends Component {

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

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    incrementByTwo = () => {
        this.setState({
            count: this.state.count + 2
        })
    }

    render() {
        const { count } = this.state;
        return (
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <div className="d-flex align-items-center border rounded p-3 bg-light shadow-sm">
                            <Button 
                                variant="danger" 
                                onClick={this.handleDecrement}
                                disabled={count <= 0}
                                className="rounded-circle"
                                style={{width: "35px", height: "35px", fontSize: "15px", fontWeight: "bolder"}}
                            >
                                -
                            </Button>
                            
                            <div className="mx-4 text-center">
                                <h2 className="mb-0">{count}</h2>
                            </div>

                            <Button 
                                variant="primary" 
                                onClick={this.handleIncrement}
                                className="rounded-circle"
                                style={{width: "35px", height: "35px", fontSize: "15px", fontWeight: "bolder"}} 
                            >
                                +
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
