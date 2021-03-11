import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PortfolioCard({ CardSet }) {
    return (
        <Carousel>
        {CardSet.map((card, index) => {
            return( 
                <Card key={index++} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.img}/>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                            {card.descript} 
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href={card.codeLink}>Checkout the Code</Card.Link>
                        <Card.Link href={card.link}>See the app</Card.Link>
                    </Card.Body>
                </Card>
            )
        })}
        </Carousel>
    )
}