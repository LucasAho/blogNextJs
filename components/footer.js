import { Container, Navbar } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="text-center my-2">
            <Navbar className="justify-content-center" bg="light" expand="lg">
                <Navbar.Brand className="mx-4" href="https://www.linkedin.com/in/lucas-asher-679569193/">
                    <img
                        src="https://i.imgur.com/V6T5SCx.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="LinkedIn"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://www.instagram.com/lucas_asher_a/?hl=en">
                    <img
                        src="https://i.imgur.com/DjNfrVO.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Instagram"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://github.com/LucasAho">
                    <img
                        src="https://i.imgur.com/li9Vx54.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Github"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" onClick={handleShow}>
                    <img
                        src="https://i.imgur.com/K8OKoFe.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Contact Form"
                    />
                </Navbar.Brand>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Form className="mx-3">
                    <Form.Group controlId="contactForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Marvarax Thufolk" />
                    </Form.Group>
                    <Form.Group controlId="contactForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Send
                </Button>
                </Modal.Footer>
            </Modal>
            Copyright©
        </Container>
    )
}