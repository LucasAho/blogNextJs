import { useRouter } from 'next/router'
import BlogNav from '../../components/blogNav'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleLoader from '../../components/article';
import SidebarContent from '../../components/SidebarContent';
import { Footer } from '../../components/footer2';

const Article = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <Container>
            <BlogNav/>
            <Row>
                <Col md={9}>
                    {slug !== undefined ?
                        (<ArticleLoader articleId = {slug} />)
                    :
                    null}
                </Col>
                <Col md={3}>
                    <SidebarContent/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export default Article;