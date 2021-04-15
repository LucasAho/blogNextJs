import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LinkToArticle from "../components/LinkToArticle";

import Link from 'next/link';

export class BigPanel extends Component {
    render() {
        return (
            <Card className="text-white">
                <Card.Img src="https://i.imgur.com/r837OdL.png" style={{width: '80%'}} className='mx-auto' alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text>
                    </Card.Text>
            <Link
                href="/worldbuild/wbHome"
                as={`/worldbuild/wbHome`}>
                    Maalima
            </Link>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export class SmallPanel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data.post;
        return (
            <Card className="my-1 justify-content-center flex-grow-1" style={{ width: '100%' }}>
                    <Card.Img variant='top' src={data.image} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.blurb}
                    </Card.Text>
                    <LinkToArticle id ={data._id} title={0}/>
                </Card.Body>
            </Card>
        )
    }
}