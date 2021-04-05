import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Link from 'next/link';

export class BigPanel extends Component {
    render() {
        return (
            <Card className="text-white">
                <Card.Img style={{ width: 300, height: 550 }} src="https://asucla.ucla.edu/v2/wp-content/uploads/2016/02/placeholder-image-tall.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Constructed Languages</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Link /*href={{ pathname: '/conlang/tukren', query: { id: "CaveAllegory" } }}*/ href="#">
                        <Button className="stretched-link primary-btn">Open Article</Button>
                    </Link>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export class SmallPanel extends Component {
    render() {
        return (
            <Card className="bg-dark dark-text">
                <Card.Img src="https://i.imgur.com/Or6G6cL.png" style={{ width: "100%", height: "100%" }} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Map of Maalima</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}