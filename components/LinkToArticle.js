import { Component } from "react";
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default class LinkToArticle extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props
        if (props.title != 0) {
        return (
            <Link
                href="/article/[slug]"
                as={`/article/${props.id}`}>
                    <a>{props.title}</a>
            </Link>
        )
        } else {
            return (
                <Link
                    href="/article/[slug]"
                    as={`/article/${props.id}`}>
                        <Button className="stretched-link primary-btn">See Post</Button>
                </Link>
                
            )
        }
    }
}