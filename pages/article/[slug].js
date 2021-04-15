import { useRouter } from 'next/router'
import BlogNav from '../../components/blogNav'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleLoader from '../../components/ArticleDisplay';
import SidebarContent from '../../components/SidebarContent';
import { Footer } from '../../components/footer2';
import API from '../api/blog-api';

export const getStaticProps = async ({ params }) => {
    const res = await API.getPostById(params.slug);
    const data = await res.data;
    return {
        props: {
            article: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await API.getAllPosts();
    const data = await res.data;  
    const paths = data.map(article => ({
        params: { slug: article._id },
    }))
    return { paths, fallback: false }
}


const Article = ({ article }) => {
    return (
        <Container>
            <BlogNav/>
            <Row>
                <Col md={9}>
                    <ArticleLoader article={article} />
                </Col>
                <Col md={3}>
                    <SidebarContent exclude={article._id}/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export default Article;