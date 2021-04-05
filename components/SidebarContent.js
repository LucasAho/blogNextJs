import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../pages/api/blog";
import Spinner from 'react-bootstrap/Spinner';
import Link from 'next/link';

export default class SidebarContent extends Component {
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
                data: res.data
            }));
    }
    render() {
        const { isLoaded, data } = this.state;
        return (
            (
                isLoaded ?
                    <Container className='px-1'>
                        <h6>Recent Articles</h6>
                        <ul>
                        {data.map((article, i) => {
                            return ( 
                                <li key={i++}>
                                    <Link 
                                        href="/blog"
                                        as={`/blog/${article._id}`}>
                                            <a>{article.title}</a>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </Container>
                    :
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
            )
        )
    }
}
