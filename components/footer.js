import { Container, Navbar } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from "./contactForm";

export default function Footer() {
    const [show, setShow] = useState(false);
    const [sent, setSent] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSent = () => setSent(true);

    return (
        <Container className="text-center contrast-bg my-2">
            <Navbar className="justify-content-center" expand="md">
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
                <ContactForm />
                <Modal.Footer>
                    <Button className="contrast-bg dark-text" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            Copyright©
        </Container>
    )
}