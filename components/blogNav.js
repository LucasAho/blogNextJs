import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import ContactForm from './contactForm';

export default function BlogNav() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Row className='my-2'>
            <Jumbotron className="text-center contrast-bg ">
                <Container className='my-2 py-2'>
                    <h1>The Creative Process</h1>
                    <Navbar className="contrast-bg" expand="sm">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="mr-auto nav-justified" variant='pills'>
                                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                <NavDropdown title="Topics">
                                    <NavDropdown.Item href="#">Mental Health</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Conlangs</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Politics</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Poetry</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="justify-content-end">
                                <Navbar.Brand className="mx-1" href="https://www.linkedin.com/in/lucas-asher-679569193/">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </Navbar.Brand>
                                <Navbar.Brand className="mx-1" href="https://www.instagram.com/lucas_asher_a/?hl=en">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </Navbar.Brand>
                                <Navbar.Brand className="mx-1" href="https://github.com/LucasAho">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </Navbar.Brand>
                                <Navbar.Brand className="mx-1 pointer-cursor" onClick={handleShow}>
                                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                                </Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                        <Modal show={show} onHide={handleClose}>
                            <ContactForm />
                            <Modal.Footer>
                                <Button className="contrast-bg dark-text" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Navbar>
                </Container>
            </Jumbotron>
        </Row>
    )
}