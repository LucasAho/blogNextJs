import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { CardSet } from "../pages/api/portfolioCardSet";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1600 },
        items: 4,
        partialVisibilityGutter: 60
    },
    laptop: {
        breakpoint: { max: 1600, min: 1024 },
        items: 3.5,
        partialVisibilityGutter: 50
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 40
    }
};

const CardCarousel = () => {

    return (
        <Carousel
            partialVisible
            containerClass="container"
            itemClass="carousel-item-padding-40-px mx-2"
            infinite
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            slidesToSlide={1}
        >

            {CardSet.map((card, index) => {
                return( 
                    <Card key={index++} className="portfolio-deck">
                        <Card.Img variant="top" className='mx-auto' style={{height: 275, width: 225}} src={card.img}/>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.descript} 
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className={"mx-auto justify-content-center"}>
                            <Row>
                                <Col>
                                    <Card.Link href={card.link} className="text-decoration-none">
                                        <Button variant="outline-secondary">Visit the App</Button>
                                    </Card.Link> 
                                </Col>
                                <Col>
                                    <Card.Link href={card.codeLink} className="text-decoration-none">
                                        <Button variant="outline-secondary">See the Code</Button>
                                    </Card.Link> 
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            })}
        </Carousel>
    );
};

export default CardCarousel;
