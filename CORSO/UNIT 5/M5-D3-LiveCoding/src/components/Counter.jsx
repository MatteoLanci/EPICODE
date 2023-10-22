import React, { useState } from 'react'
import MainButton from './MainButton'

const Counter = () => {
    // il primo valore nell'array è lo stato di "lettura"
    // il secondo valore nell'array è lo stato che serve a "scrivere"
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        setCounter(counter === 0 ? 0 : counter - 1)
    }

    return (
        <div>
            <h1>Contatore: {counter}</h1>
            <MainButton
                type="button"
                variant="primary"
                buttonText="incrementa"
                onClickFn={incrementCounter}
            />
            <MainButton
                type="button"
                variant="warning"
                buttonText="decrementa"
                onClickFn={decrementCounter}
            />
        </div>
    )
}

export default Counter

/*
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

export default Counter*/
