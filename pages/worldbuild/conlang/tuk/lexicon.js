import Table from "react-bootstrap/Table";
import API from '../../../api/blog-api';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useUser } from "@auth0/nextjs-auth0"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Lexicon({ words }){
    const { user } = useUser();

    const [word, setWord] = useState({});
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        if (user.name === "aholucascode@gmail.com") {
            const nameValidate = "aholucascode@gmail.com";
            API.createWord({data: formDataObj, validate: nameValidate});
        }
    }
    return(
        <Container>
            {user && (user.name === "aholucascode@gmail.com" ? 
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>Tukren Word</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="conlang"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>English</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="english"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>Part of Speech</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pos"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>Use it in a sentence</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sentence"
                                />
                            </Form.Group>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>Etymology</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="etymology"
                                />
                            </Form.Group>
                            <Form.Group controlId="newWord.ControlInput1">
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                />
                            </Form.Group>
                        </Col>
                        <Button variant="primary" className="my-2" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>
                :
                null
            )}
            <Card>
                <Card.Header><h5>{word.conlang}</h5></Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text>English Definition: {word.english}</Card.Text>
                            <Card.Text>
                                Part of Speech: {word.pos}
                            </Card.Text>
                            <Card.Text>
                                Used in a sentence: &nbsp;  
                                {word.sentence} 
                            </Card.Text>
                            <Card.Text>
                                Etymology: &nbsp;
                                {word.etymology} 
                            </Card.Text>
                        </Col>
                        {word.image == 1 ?
                            <Col>
                                <Card.Img src={word.image}></Card.Img>
                            </Col>
                            : null
                        }
                    </Row>
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
                    {words.map((word, i)=> {
                        return(
                            <tr key={i++} onClick={()=> setWord(word)}>
                                <th scope="row">{word.conlang}</th>
                                <td>{word.pos}</td>
                                <td>{word.english}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
} 

export async function getStaticProps() {
    const res = await API.getAllWords();
    return {
        props: {
            words: res.data
        }
    }
}

export default Lexicon;