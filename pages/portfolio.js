import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from "../components/portfolioSectionHeader";
import CardCarousel from "../components/cardCarousel";
import { Footer } from "../components/footer2"
import MenuButton from "../components/menuButton";
import { Element } from 'react-scroll';
import API from "./api/blog-api";
import Card from 'react-bootstrap/Card';
import LinkToArticle from "../components/LinkToArticle";

function PortfolioPage({ posts }) {
    return (
        <Container className="justify-content-center">
        <Head>
            <title>Lucas Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
            <MenuButton />
            <Element id='bio' name='bio'>
                <Container className="purple-bg py-3">
                    <Row>
                        <SectionHeader
                            titleText="Lucas Asher"
                            subText="Author, rock climber, and full stack developer"
                            variant="h6"
                            color="light"
                        />
                    </Row>
                    <Row className="mt-2">
                        <Col md="5" className="light-text">
                            <div className="mb-3">
                                Hello! I am Lucas Asher, a software developer and aspiring author located out of Colorado.
                                I spend every moment in pursuit of my goals and cherish learning above all.
                            </div>
                            <div className="my-3">
                                When I'm not putting working or writing, I enjoy rock climbing and running. Otherwise, you can find me learning new subjects, 
                                writing prose and poetry, and putting together DnD campaigns for my friends.
                            </div>
                            <div className="my-3">
                                This website navigates from my programming experience to my creative endeavors;
                                it will be regularly updated as I take on new projects. Please feel free to connect via any of the socials I have linked below.
                            </div>
                        </Col>
                        <Col>
                            <Carousel prevLabel="" nextLabel="">
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/6LtK6k6.jpg"
                                        alt="Fulford Slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/uvF9lH3.jpg"
                                        alt="Kelso Ridge Slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/gw9gL7s.jpg"
                                        alt="Climb Boulder"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/yHyv7Yk.jpg"
                                        alt="Dead Dog Glissade"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/iR3Bd5r.jpg"
                                        alt="Climb Dyno"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.imgur.com/KpdFJUr.jpg"
                                        alt="Torrey's Summit"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Element>
            <Element id='port' name='port'>
                <Container className="py-3">
                    <SectionHeader
                        titleText="Portfolio"
                        subText="A showcase of skills cultivated in full stack development. The following applications 
                        display understanding of RESTful APIs, the MERN stack, high fluency in ES6, and competency in visual design."
                        variant="p"
                        color="dark"
                    />
                    <Row>
                        <CardCarousel />
                    </Row>
                </Container>
            </Element>
            <Element id='blog' name='blog'>
                <Container className="pt-3" style={{ backgroundColor: "#180D35" }}>
                    <SectionHeader
                        titleText="The Creative Spectrum"
                        subText="My blog for sharing my poetry, short stories, and philisophical essays"
                        variant="p"
                        color="light"
                    />
                    <Row className='px-3'>
                        <Col className='d-flex flex-column' md={6}>
                            <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                                    <Card.Img variant='top' src={posts[0].image} />
                                <Card.Body>
                                    <Card.Title>{posts[0].title}</Card.Title>
                                    <Card.Text>
                                        {posts[0].blurb}
                                    </Card.Text>
                                    <LinkToArticle id ={posts[0]._id} title={0}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex flex-column' md={6}>
                            <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{posts[1].title}</Card.Title>
                                    <Card.Text>
                                        {posts[1].blurb}
                                    </Card.Text>
                                    <LinkToArticle id ={posts[1]._id} title={0}/>
                                </Card.Body>
                            </Card>
                            <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{posts[2].title}</Card.Title>
                                    <Card.Text>
                                        {posts[2].blurb}
                                    </Card.Text>
                                    <LinkToArticle id ={posts[2]._id} title={0}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Element>
            <Element name='contact' id='contact'>
                <Footer />
            </Element>
        </Container>
    )
}
export async function getStaticProps() {
    const res = await API.getAllPosts();
    const posts = await res.data.reverse();
    return {
        props: {
            posts
        }
    }
};

export default PortfolioPage