import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm='10'>
                        <Row>
                            <Col sm='8'>
                                <h2>article title here</h2>
                                <p>
                                    date written
                                    topic
                                </p>
                            </Col>
                            <Col sm='4'>
                                <p>img will go here</p>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Blurb goes here</h6>
                        </Row>
                        <Row>
                            <p>Article content gets spliced out here</p>
                        </Row>
                    </Col>
                    <Col sm='2'>
                        <div>
                            a list of articles goes here
                        </div>
                    </Col>
                </Row>
            </Container>
        ) 
    }
}
