import { Component } from "react";
import Card from "react-bootstrap/Card";

export class BigPanel extends Component{
    render() {
        return(
            <Card className="text-white">
                <Card.Img style={{ width: 300, height: 550 }} src="https://asucla.ucla.edu/v2/wp-content/uploads/2016/02/placeholder-image-tall.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>The First Pillar of O'radren</Card.Title>
                    <Card.Text>
                        The first of six pillars supporting Oradren's Temple. 
                        Analogous to the Judaic ten commandments in Rohiren orthodox faith.
                    </Card.Text>
                    <Card.Link className='stretched-link' href="/article">
                        Article
                    </Card.Link>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export class SmallPanel extends Component{
    render() {
        return(
            <Card className="bg-dark text-white">
                <Card.Img style={{ height: 225,  width: 400 }} src="https://i.imgur.com/it5vjBg.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Escaping Suicide</Card.Title>
                    <Card.Text>
                        This is a blurb of text that I may or may not keep
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}