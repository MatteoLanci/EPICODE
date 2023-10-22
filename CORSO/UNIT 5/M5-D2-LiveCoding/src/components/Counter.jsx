import React, { Component} from 'react'
import MainButton from './MainButton'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    incrementCount() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    decrementCount() {
        this.setState((prevState) => ({
            counter: prevState.counter === 0 ? 0 : prevState.counter - 1
        }))
    }

    render() {
        return(
            <div>
                <h1>Contatore: {this.state.counter}</h1>
                <MainButton
                    type="button"
                    variant="primary"
                    buttonText="incrementa"
                    onClickFn={() => this.incrementCount()}
                />
                <MainButton
                    type="button"
                    variant="warning"
                    buttonText="decrementa"
                    onClickFn={() => this.decrementCount()}
                />
            </div>
        )
    }
}

export default Counter