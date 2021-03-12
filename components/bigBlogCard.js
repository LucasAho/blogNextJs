import { Component } from "react";
import API from "../pages/api/blog";


class BigCard extends Component {   
    state = {
        img: "",
        title: "",
        blurb: "",
        date: ""
    }

    componentDidMount(){
        this.loadRecentArticle();
    }
    loadRecentArticle = () => {
        API.getMostRecent()
        .then(res => {
            this.setState({
                img: res.image,
                title: res.title,
                blurb: res.blurb,
                date: res.dateWritten
            })
        });
    }
}
export default BigCard