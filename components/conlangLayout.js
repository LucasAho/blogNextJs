import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'; 

export default function ConLangLayout(props) {
    return (
        <Container>
            {props.children}
        </Container> 
    )
}
