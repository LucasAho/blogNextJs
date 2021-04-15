import { Component } from "react";
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default class LinkToArticle extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props
        return (
            <Link
                href="/article/[slug]"
                as={`/article/${props.id}`}>
                    {props.variant === 'no-btn' ?
                        null 
                        :
                    <Button className="stretched-link primary-btn">See Post</Button>
        }
            </Link>
        )
    }
}