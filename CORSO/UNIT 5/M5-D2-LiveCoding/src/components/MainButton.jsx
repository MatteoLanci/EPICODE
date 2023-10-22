import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

class MainButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Button
                onClick={this.props.onClickFn}
                variant={this.props.variant}>
                {this.props.buttonText}
            </Button>
        )
    }
}

export default MainButton;