
import { useRouter } from 'next/router'
import BlogNav from '../components/blogNav'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from './../components/article';

const Post = () => {
    const {
        query: { id },
    } = useRouter();


    //console.log(router)
    return (
        <Container>
            <BlogNav
            />
            <Row>
                <Col md={10}>
                    {id}
                    {console.log(id)}
                    {/*<Article articleId={id} / >*/}
                </Col>
                <Col md={2}>
                    This will display sidebar content
                </Col>
            </Row>
            {/* pid should register as the id to search for */}
            <p>Post: {id}</p>

        </Container>
    )
}

export default Post