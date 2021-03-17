import { Component } from "react";
import API from "../pages/api/blog";
import { Spinner } from "react-bootstrap";
import PresentationComponent from "./PresentationComponent";

export default class CardPanel extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    componentDidMount() {
        API.getAllPosts()
            .then(res => this.setState({
                ...this.state,
                isLoaded: true,
                data: res.data.reversed(slice(Math.max(res.data.length - 3, 0)))
            }) 
        );
    }
    render() {
        const { isLoaded, data } = this.state;
        return(
            (
                isLoaded ?
                <PresentationComponent data = { data } />
                : 
                <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> 
            )
        )
    }
}