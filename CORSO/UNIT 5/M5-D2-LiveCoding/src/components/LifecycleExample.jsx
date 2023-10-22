import React, { Component } from 'react'
import SingleCard from './SingleCard'

// https://dummyjson.com/products

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }

    async getProducts() {
        const data = await fetch('https://dummyjson.com/products')
        const response = await data.json()
        this.setState({ products: response })
    }

    componentDidMount() {
        // componente stà per essere montato
        this.getProducts()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        // componente stà per essere aggiornato
        // o meglio, i suoi stati sono stati aggiornati
        if(prevProps !== this.props) {
            console.log('props has changed')
        }
    }

    componentWillUnmount() {
        // il componente stà per essere smontato
    }

    render() {
        const { products } = this.state.products
        return(
            <div>
                {products && products.slice(0,2).map((product) => {
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


