
import { useRouter } from 'next/router'
import BlogNav from '../components/blogNav'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from './../components/article';
import SidebarContent from '../components/SidebarContent';
import { Footer } from '../components/footer2';

const Post = () => {
    const {
        query: { id },
    } = useRouter();
    
    return (
        <Container>
            <BlogNav/>
            <Row>
                <Col md={9}>
                    {id !== undefined ?
                        (<Article articleId = {id} />)
                    :
                    null
                    }
                </Col>
                <Col md={3}>
                    <SidebarContent/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export default Post