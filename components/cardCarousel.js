import Card from 'react-bootstrap/Card';
import React from "react";
import Carousel from "react-multi-carousel";
import { CardSet } from "../pages/api/portfolioCardSet";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 40
    }
};

const CardCarousel = ({ deviceType }) => {
    return (
        <Carousel
            partialVisible
            containerClass="container"
            deviceType={deviceType}
            ssr={true}
            itemClass="carousel-item-padding-40-px mx-2"
            infinite
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            slidesToSlide={1}
        >
            {CardSet.map((card, index) => {
                return( 
                    <Card key={index++}  >
                        <Card.Img variant="top" style={{ height: 300, width: "100%" }} src={card.img}/>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.descript} 
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className={"mx-auto justify-content-center"}>
                            <Card.Link href={card.link} className="text-decoration-none">
                                <Button variant="outline-secondary">See the App</Button>
                            </Card.Link> 
                            <Card.Link href={card.codeLink} className="text-decoration-none">
                                <Button variant="outline-secondary">See the Code</Button>
                            </Card.Link> 
                        </Card.Body>
                    </Card>
                )
            })}
        </Carousel>
    );
};

export default CardCarousel;
