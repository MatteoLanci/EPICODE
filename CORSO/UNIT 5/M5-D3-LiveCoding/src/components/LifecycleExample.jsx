import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import { nanoid } from 'nanoid'

// https://dummyjson.com/products

const LifeCycleExample = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async() => {
        setIsLoading(true)
        try {
            const data = await fetch('https://dummyjson.com/products')
            const response = await data.json()
            setProducts(response)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }


    // array delle dipendenze vuoto => componentDidMount
    // array pieno => componentDidUpdate - tutto ciò che è all'interno dello useEffect verrà ri-eseguito al 
    // cambiamento di uno degli stati presenti nell'array delle dipendenze

    // callback () =>  => componentwillunmount, ovvero la logica verrà eseguita quando
    // il componente viene smontato
    useEffect(() => {
       getData() 
       // altra logica
    }, [])


    return (
        <div>
            {error && <h1>OOPS, qualcosa è andato storto</h1>}
            {isLoading && !error && <h2>Caricamento...</h2>}
            {!isLoading && !error && products && products.products?.slice(0,2).map((product) => {
                return(
                    <SingleCard
                        key={nanoid()}
                        img={product.images[0]} 
                        title={product.title}
                        price={product.price}
                        btnTitle="titolo"
                    />
                )
            })}
        </div>
    )
}

export default LifeCycleExample;


/* class LifeCycleExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            isLoading: false,
            error: null,
            isModalOpen: false
        }
    }

    async getProducts() {
        this.setState({ isLoading: true })
        try {
            const data = await fetch('https://dummyjson.com/products')
            const response = await data.json()
            this.setState({ products: response })
            this.setState({ isLoading: false })
        } catch (error) {
            console.log(error)
        }
    }

    toggleComponent() {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen
        }))
    }

    componentDidMount() {
        // componente stà per essere montato
        this.getProducts()
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        // componente stà per essere aggiornato
        // o meglio, i suoi stati sono stati aggiornati

        // puoi eseguire una tua logica, al cambiamento di props o state
        if(prevProps !== this.props) {
            console.log('props has changed')
        }
    }

    componentWillUnmount() {
        // il componente stà per essere smontato
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(event) {
        if (event.key === 'Escape') {
            console.log('ESC pressed')
        }
    }

    render() {
        const { products } = this.state.products
        return(
            <div>
                <button onClick={() => this.toggleComponent()} >Toggle</button>
                {this.state.isLoading && <h2>Caricamento...</h2>}
                {this.state.isModalOpen && <h2>CIAO SONO IL DIV NASCOSTO</h2>}
                {!this.state.isLoading && products && products.slice(0,2).map((product) => {
                    return(
                        <SingleCard
                            img={product.images[0]} 
                            title={product.title}
                            price={product.price}
                            btnTitle="titolo"
                        />
                    )
                })}
            </div>
        )
    }
}

export default LifeCycleExample;
 */

