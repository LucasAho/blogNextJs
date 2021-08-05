import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function DictionaryForm(props){
    return(
                <Form onSubmit={props.onFormSubmit()}>
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
                        </Col>
                        <Button className="my-2 blue-bg" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>
    )
}