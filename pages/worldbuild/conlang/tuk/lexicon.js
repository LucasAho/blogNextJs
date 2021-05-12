import Table from "react-bootstrap/Table";
import API from '../../../api/blog-api';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

function Lexicon(){
    return(
        <Container>
            {/*
            <Card className="my-1 mx-auto justify-content-center flex-grow-1" /*style={{ width: '85%' }}>
                <Card.Body>
                    <Col md={6}>
                        <Card.Header><h5>{word.conlang}</h5></Card.Header>
                    </Col>
                    <Col md={6}>
                        <Card.Text>
                            {word.english}
                            {word.pos}
                            {word.etymology}
                            {word.sentence}
                        </Card.Text>
                    </Col>
                </Card.Body>
            </Card>
            <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Tukren</th>
                        <th scope="col">Part of Speech</th>
                        <th scope="col">English</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(word => {
                        return(
                            <tr>
                                <th scope="row">{word.conlang}</th>
                                <td>{word.PoS}</td>
                                <td>{word.english}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    */}
        </Container>
    )
} 

export async function getStaticProps() {
    const res = await API.getAllWords();
 //  const words = await res.data();
    return {
        props: {
            words: ""
        }
    }
}

export default Lexicon;