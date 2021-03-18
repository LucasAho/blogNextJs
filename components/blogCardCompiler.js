import { Component } from "react";
import API from "../pages/api/blog";
import { Spinner } from "react-bootstrap";
import PresentationComponent from "./PresentationComponent";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class CardPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    componentDidMount() {
        API.getAllPosts()
            .then(res => this.setState({
                ...this.state,
                isLoaded: true,
                data: res.data.slice(Math.max(res.data.length - 3, 0))
            })
            );
    }
    render() {
        const { isLoaded, data } = this.state;
        return (
            (
                isLoaded ?
                    <Row className='px-3'>
                        <Col className='d-flex flex-column' md={6}>
                            <PresentationComponent data={data[2]} variant="large" />
                        </Col>
                        <Col className='d-flex flex-column' md={6}>
                            <PresentationComponent data={data[0]} variant="small" />
                            <PresentationComponent data={data[1]} variant="small" />
                        </Col>
                    </Row>
                    :
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
            )
        )
    }
}