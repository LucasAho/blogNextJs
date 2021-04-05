import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BigPanel, SmallPanel } from '../components/featuredPanel'
import BlogNav from '../components/blogNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/contactForm';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Button } from 'react-bootstrap';

export default function Home() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Asher</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
          <BlogNav handleShow = {handleShow}/>
          Please note site is very much under construction
          <Row>
            <Col className="sm-6">
              <BigPanel/>
              {/*  Big card */}
            </Col>
            <Col className="sm-3">
              <SmallPanel/>
              {/*  Two small cards */}
            </Col>
            <Col className="sm-3">
              {/*  Two small cards */}
            </Col>
          </Row>
      </Container>
    </div>
  )
}
