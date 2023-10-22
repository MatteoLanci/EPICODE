import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>{this.props.price}</Card.Title>
                    <Button variant="primary">{this.props.btnTitle}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleCard;