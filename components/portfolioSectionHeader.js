import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function SectionHeader(props) {
    let colorString = props.color;
    let hex  = (colorString == "light" ? "#FFFFFF" : "#000000")
    return (
        <Container fluid="xl">
            <Row className="justify-content-center">
                <Col sm="12" as="h1" className="text-center" style={{color: hex}}>
                    {props.titleText}
                </Col>
                <Col sm="9" as={props.variant} className="text-center" style={{color: hex}}>
                    {props.subText}
                </Col>
            </Row>
        </Container>
    )
}