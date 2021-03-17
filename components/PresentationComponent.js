import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GetBigCard({ img, blurb, title, _id }){
    return (
        <Col md='6' className="my-2">
            <Card className="justify-content-center" style={{ width: '100%' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {blurb}
                    </Card.Text>
                    <Button  className="stretched-link" href="/post/"{..._id}>Full Article</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default function PresentationComponent({ data }) {
    return (
        <Row className="px-3">
            <Col md={6}>
                {GetBigCard(data[0])}
            </Col>
            <Col md={6}>
                {data.map(article => {
                    (data.indexOf(article) !== 0 ?        
                        <Card className="my-2" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    {article.blurb}
                                </Card.Text>
                                <Button className="stretched-link" href="/post/"{...article._id}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        :
                        null
                    )
                })}
            </Col>
        </Row>
    )

}