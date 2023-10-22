import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleCard = ({ img, title, price, btnTitle }) => {

    const [selected, setSelected] = useState(false)

    const toggleSelected = () => setSelected(!selected)
    
  return (
    <Card 
        className={`${selected ? 'border border border-danger shadow-lg' : null }`}
        onClick={toggleSelected} style={{ width: '18rem' }}
    >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Button variant="primary">{btnTitle}</Button>
        </Card.Body>
    </Card>
  )
}

export default SingleCard

/* class SingleCard extends Component {
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

export default SingleCard; */