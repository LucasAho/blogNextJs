import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from "../components/portfolioSectionHeader";
import CardCarousel from "../components/cardCarousel";
import CardPanel from "../components/blogCardCompiler";
import Card from "react-bootstrap/Card";
import Footer from "../components/footer"
import MenuButton from "../components/menuButton";
import { Element } from 'react-scroll';

export default function PortfolioPage() {
    return (
        <Container className="justify-content-center">
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
                                When Colorado isn't dumping snow, I relax by rock climbing and biking. When I'm content indoors, I put my free time into
                                learning new subjects, writing prose and poetry, and putting together DnD campaigns for my friends.
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
                                        src="https://i.imgur.com/Po4afuv.jpg"
                                        alt="Hiking Photo"
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
                                        src="https://i.imgur.com/238uTzk.jpg"
                                        alt="Hiking Photo"
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
                                        src="https://i.imgur.com/bf1GYPn.jpg"
                                        alt="Hiking Photo"
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
                <Container className="py-3" style={{ backgroundColor: "#180D35" }}>
                    <SectionHeader
                        titleText="The Creative Process"
                        subText="My blog for sharing my creative works and my philosophies behind them"
                        variant="p"
                        color="light"
                    />
                    <CardPanel />
                </Container>
            </Element>
            <Element name="podcast" id="podcast">
                <Container className="py-3 justify-content-center" >
                    <SectionHeader
                        titleText="Podcast"
                        subText="Upcoming podcast discussing the importance of creativity and art for mental health"
                        variant="p"
                        color="dark"
                    />
                    <Card className="my-2 justify-content-center mx-auto" style={{ width: '80%' }}>
                        <Row>
                            <Col sm={3}>
                                <Card.Body>
                                    <Card.Title>Episode 1</Card.Title>
                                    <Card.Text>
                                        Expected release date: Apr 5, 2021
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col sm={9}>
                                <Card.Img alt="WiP" style={{ width: '80%' }} src="https://t3.ftcdn.net/jpg/03/05/40/20/360_F_305402093_Xjwbp9xAfRElg7vD6eOAOe8BcYRLOqal.jpg" />
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Element>
            <Element name='contact' id='contact'>
                <Footer />
            </Element>
        </Container>
    )
}