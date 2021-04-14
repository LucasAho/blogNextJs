import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../pages/api/blog-api";
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
        API.getPostById(this.props.articleId)
            .then(res => this.setState({
                ...this.state,
                isLoaded: true,
                data: res.data
            })
            )
    }
    render() {
        const { isLoaded, data } = this.state;
        return (
            (
                isLoaded ?
                            <Container>
                                <Row>
                                    <Col md='8'>
                                        <h2>{data.title}</h2>
                                        <p>
                                            Date: {data.dateWritten} |
                                            Topic: {data.genre}
                                        </p>
                                        <h6 className='mx-4'>{data.blurb}</h6>
                                    </Col>
                                    <Col className='my-auto' md='4'>
                                        <img className="mt-1 article-img" src={data.image} />
                                    </Col>
                                </Row>
                                <Row className='mr-1 mt-3'>
                                    {data.paragraphs.map((p,i) => {
                                        return (
                                            <div key={i++}>
                                                {p} 
                                            </div>
                                        )
                                    })}
                                </Row>
                            </Container> 
                            
                    :
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
            )
        )
    }
}
