
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BigPanel, SmallPanel } from '../../../components/featuredPanel'
import BlogNav from '../../../components/blogNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../../../components/contactForm';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Button } from 'react-bootstrap';

export default function Tukren() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Container>
            <Head>
                <title>Tukren Language</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <BlogNav handleShow = {handleShow} title='World of Maalima'/>
            <Row>
                <Col sm={2}>
                    Maalima Wiki
                </Col>
                <Col sm={8}>
                    Voice of Stone
                    
                </Col>
                <Col sm={2}>
                    ToC
                </Col>
            </Row>
        </Container>
    )
}
