import Button from 'react-bootstrap/Button';
import React from 'react'

const MainButton = ({ variant, buttonText, onClick }) => {
    return (
        <Button
                onClick={onClick}
                variant={variant}>
                {buttonText}
            </Button>
    )
}

export default MainButton;

/* class MainButton extends Component {
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

export default MainButton; */