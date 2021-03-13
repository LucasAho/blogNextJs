import { Component } from "react";
import API from "../pages/api/blog";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class SmallCard extends Component{
    state = {
        title: "",
        blurb: "",
        date: ""
    }
    componentDidMount() {
        API.getAllPosts()
            .then(res => {
                this.setState({
                    title: res.data[res.data.length - this.props.set].title,
                    blurb: res.data[res.data.length - this.props.set].blurb,
                    date: res.data[res.data.length - this.props.set].date,
                })
            })
    }
    render() {
        return(
            <Card className="my-2" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>
                        {this.state.blurb}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )}
}
