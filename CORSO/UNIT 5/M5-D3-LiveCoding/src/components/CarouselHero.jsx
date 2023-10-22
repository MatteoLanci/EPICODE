import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { carouselItems } from '../data/carouselItems'
import { nanoid } from 'nanoid'


const CarouselHero = () => {
    return (
        <Carousel>
                {carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={nanoid()}>
                            <img
                            className={item.className}
                            src={item.src}
                            alt={item.alt}
                            />
                            <Carousel.Caption>
                            <h3>{item.captionTitle}</h3>
                            <p>{item.captionDesc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
    )
}

export default CarouselHero

/* class CarouselHero extends Component {
    constructor(props) {
        super(props)
      }


    render() {
        return(
            <Carousel>
                {carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={nanoid()}>
                            <img
                            className={item.className}
                            src={item.src}
                            alt={item.alt}
                            />
                            <Carousel.Caption>
                            <h3>{item.captionTitle}</h3>
                            <p>{item.captionDesc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}

export default CarouselHero */