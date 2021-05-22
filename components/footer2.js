import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export function Footer() {

    return (
        <Container className="text-center purple-bg mt-2">
            <Navbar className="justify-content-center" expand="md">
                <Navbar.Brand className="mx-4" href="https://www.linkedin.com/in/lucas-asher-679569193/">
                    <FontAwesomeIcon style={{color: "#bec7ca"}} icon={['fab', 'linkedin']} />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://www.instagram.com/lucas_asher_a/?hl=en">
                    <FontAwesomeIcon style={{color: "#bec7ca"}} icon={['fab', 'instagram']} />
                </Navbar.Brand>
                <Navbar.Brand className="mx-4" href="https://github.com/LucasAho">
                    <FontAwesomeIcon style={{color: "#bec7ca"}} icon={['fab', 'github']} />
                </Navbar.Brand>
                <Link href="/contact" as="/contact">
                    <Navbar.Brand className="mx-4 pointer-cursor" >
                        <FontAwesomeIcon style={{color: "#bec7ca"}} icon={['fas', 'envelope']} />
                    </Navbar.Brand>
                </Link>
            </Navbar>
            Copyright©
        </Container>
    )
}