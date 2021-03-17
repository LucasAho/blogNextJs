import { Container, Navbar } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="text-center my-2">
            <Navbar className="justify-content-center" bg="light" expand="md">
                <Navbar.Brand className="mx-4" href="https://www.linkedin.com/in/lucas-asher-679569193/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://www.instagram.com/lucas_asher_a/?hl=en">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://github.com/LucasAho">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4 pointer-cursor" onClick={handleShow}>
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
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