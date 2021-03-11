import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from "../components/portfolioSectionHeader";
import PortfolioCard from "../components/portfolioCard";
import CardCarousel from "../components/cardCarousel";

export default function PortfolioPage() {
    return (
        <Container className="justify-content-center">
            <Container className="py-3" style={{backgroundColor: "#180D35"}}>
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
                            Hello! I am Lucas Asher, a full stack developer and aspiring author located out of Colorado. 
                            I spend every moment in pursuit of my goals and cherish learning above all.
                        </div>
                        <div className="my-3">
                            When I'm not working out on leetscode or working on my website, I like to spend my time reading, writing, and rock climbing. 
                        </div>
                        <div className="mt-3">
                            This website navigates from my programming experience to my creative endeavors; 
                            it will be regularly updated as I take on new projects. Please feel free to contact me using the form below (The E-mail Icon) 
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
            <Container className="py-3"> 
                <SectionHeader
                    titleText="Portfolio"
                    subText="A showcase of skills cultivated in full stack development. The following applications 
                    display understanding of RESTful APIs, the MERN stack, high fluency in ES6, and competency in visual design."
                    variant="p"
                    color="dark"
                /> 
                <Row>
                    <CardCarousel
                        deviceType={"desktop"}
                    />
                    {/*<PortfolioCard
                        CardSet = { CardSet }
                    />*/}
                </Row>
            </Container>
        </Container>
    )
}