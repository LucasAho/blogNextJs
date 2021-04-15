import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ArticleLoader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const article = this.props.article;
        return (
            <Container>
                <Row>
                    <Col md='8'>
                        <h2>{article.title}</h2>
                        <p>
                            Date: {article.dateWritten} |
                            Topic: {article.genre}
                        </p>
                        <h6 className='mx-4'>{article.blurb}</h6>
                    </Col>
                    <Col className='my-auto' md='4'>
                        <img className="mt-1 article-img" src={article.image} />
                    </Col>
                </Row>
                <Row className='mr-1 mt-3'>
                    {article.paragraphs.map((p,i) => {
                        return (
                            <div key={i++}>
                                {p} 
                                <b/>
                            </div>
                        )
                    })}
                </Row>
            </Container> 
        )
    }
}
