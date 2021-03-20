import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../pages/api/blog";
import Spinner from 'react-bootstrap/Spinner';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        console.log(this.props.articleId);
        console.log('anything?')
        /*API.getPostById(this.props.id)

            .then(res => this.setState({
                ...this.state,
                isLoaded: true,
                data: res.data
            })
            )*/
    }
    render() {
        const { isLoaded, data } = this.state;
        console.log("hey  ", this.props.articleId);
        return (
            (
                isLoaded ?
                    <Container>
                        <Row>
                            <Col sm='8'>
                                <h2>{data.title}</h2>
                                <h2>{this.props.id}</h2>
                                <p>
                                    Written: {data.dateWritten}
                                </p>
                                <p>
                                    Topic: {data.genre}
                                </p>
                            </Col>
                            <Col sm='4'>
                                <img src={data.image} />
                            </Col>
                        </Row>
                        <Row>
                            <h6>{data.blurb}</h6>
                        </Row>
                        <Row>
                            {data.paragraphs.map(p => {
                                <div>
                                    {p}
                                </div>
                            })}
                        </Row>
                    </Container>
                    :
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
            )
        )
    }
}
