import { useRouter } from 'next/router'
import BlogNav from '../../components/blogNav'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <Container>
            <BlogNav/>
            <Row>
                <Col md={10}>
                    Article content will be distrubuted into this section
                </Col>
                <Col md={2}>
                    This will display sidebar content
                </Col>
            </Row>
            {/* pid should register as the id to search for */}
            <p>Post: {pid}</p>
        </Container>
    )
}

export default Post