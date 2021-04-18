import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../components/blogNav';
import { useState } from "react";

function WbHome() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className={styles.container}>
            <Head>
                <title>Maalima</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Container>
                <BlogNav handleShow = {handleShow} title="Hestafan Universe"/>
                <Row>
                    <h4>Mapping</h4>
                    <h6>World Map</h6>
                    <h6>Yoatlan Continent</h6>
                    <h6>Kurenyi Forest</h6>
                </Row>
                <Row>
                    <h4>Constructed Languages</h4>
                    <h6>Tukren</h6>
                    <h6>Hanatu</h6>
                    <h6>Golani</h6>
                </Row>
                <Row>
                    <h4>Wiki</h4>
                    <h6>Species</h6>
                    <h6>Religions</h6>
                    <h6>Governments</h6>
                </Row>
            </Container>
        </div>
    )
}

export default WbHome;