import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function PresentationComponent(props) {
    const data = props.data;
    return (
        <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
            {props.variant !== 'small' ?
                <Card.Img variant='top' src={data.image} />
                :
                null
            }
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.blurb}
                </Card.Text>
                <Button className="stretched-link" href={"/post/" + data._id}>Open Article</Button>
            </Card.Body>
        </Card>
    )

}