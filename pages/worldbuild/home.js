import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import BlogNav from '../../components/blogNav';
import Link from "next/link";

function WbHome() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Maalima</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Container>
                <BlogNav 
                    title="Maalima"
                    t2Link="/"  
                    title2="Blog"
                    tLink="/worldbuild/home"
                />
                <Row>
                    <h4>Mapping</h4>
                    <h6>World Map</h6>
                    <h6>Yoatlan Continent</h6>
                    <h6>Kurenyi Forest</h6>
                </Row>
                <Row>
                    <h4>Constructed Languages</h4>
                    <h6><Link href="/worldbuild/conlang/tukren">Tukren</Link></h6>
                    <h6>Hanatu</h6>
                    <h6>Golani</h6>
                </Row>
                <Row>
                    <h4>Wiki</h4>
                    <h6><Link href="/worldbuild/wiki/species">Hominid Species</Link></h6>
                    <h6>Religions</h6>
                    <h6>Governments</h6>
                    <h6><Link href="/worldbuild/wiki/solar">Solar System</Link></h6>
                </Row>
            </Container>
        </div>
    )
}

export default WbHome;