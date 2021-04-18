import { Component } from "react";
import Container from "react-bootstrap/Container";
import API from "../pages/api/blog-api";
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
        const exclude = this.props.exclude;
        return (
            (
                isLoaded ?
                    <Container className='px-1'>
                        <h6>Recent Articles</h6>
                        <ul>
                        {data.map((article, i) => {
                            return ( 
                                (exclude !== article._id ?  
                                <li key={i++}>
                                    <Link
                                        href="/article/[slug]"
                                        as={`/article/${article._id}`}>
                                            <a>{article.title}</a>
                                    </Link>
                                </li>
                                :
                                null
                                )
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
