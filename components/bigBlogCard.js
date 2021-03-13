import { Component } from "react";
import API from "../pages/api/blog";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class BigCard extends Component{
    state = {
        title: "",
        img: "",
        blurb: "",
        date: ""
    }
    componentDidMount() {
        API.getAllPosts()
            .then(res => {
                this.setState({
                    title: res.data[res.data.length - 1].title,
                    img: res.data[res.data.length - 1].image,
                    blurb: res.data[res.data.length - 1].blurb,
                    date: res.data[res.data.length - 1].dateWritten
                })
            })
    }
    render() {
        return(
            <Card className="justify-content-center" style={{ width: '100%' }}>
                <Card.Img variant="top" src={this.state.img}/>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>
                        {this.state.blurb}
                    </Card.Text>
                    <Button variant="primary" href="#">Full Article</Button>
                </Card.Body>
            </Card>
        )}
}
