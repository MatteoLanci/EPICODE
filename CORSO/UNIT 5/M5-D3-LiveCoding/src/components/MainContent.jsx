import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../data/horrorBooks.json'
import SingleCard from './SingleCard';


// rafce comando per generare scheletro component

const MainContent = () => {
  return (
            <Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-3'>
                        {books.map((book) => {
                            return(
                                <SingleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                    btnTitle="Vai al prodotto"
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
  )
}

export default MainContent

/* class MainContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-3'>
                        {books.map((book) => {
                            return(
                                <SingleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                    btnTitle="Vai al prodotto"
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContent; */