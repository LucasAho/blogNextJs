import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function SectionHeader(props) {
    let colorString = props.color;
    let colorClassSelector  = (colorString == "light" ? "light-text" : "dark-text")
    return (
        <Container fluid="xl">
            <Row className="justify-content-center">
                <Col sm="12" as="h2" className={`text-center ${ colorClassSelector }`}>
                    {props.titleText}
                </Col>
                <Col sm="9" as={props.variant} className={`text-center ${ colorClassSelector }`}>
                    {props.subText}
                </Col>
            </Row>
        </Container>
    )
}