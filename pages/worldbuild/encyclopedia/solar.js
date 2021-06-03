import Link from 'next/link';
import Head from 'next/head';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../../components/blogNav';
import Table from 'react-bootstrap/Table';

export default function SolarSystem(){
    return(
        <Container>
            <Head>
                <title>Maalima Solar System</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <BlogNav 
                title="Maalima"
                tLink="/worldbuild/home"
                title2="Blog"
                t2Link="/"
            />
            <Row>
                <Col sm={8}>
                    <h2>Solar System</h2>
                    <Row>
                        <h4>Amatia</h4>
                        <p>The mother star of the planet Maalima</p>
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr>
                                    <th scope="row">Mass</th>
                                    <td>1.7</td>
                                    <td>M☉</td>
                                </tr>
                                <tr>
                                    <th scope="row">Luminosity</th>
                                    <td>0.91</td>
                                    <td>L☉</td>
                                </tr>
                                <tr>
                                    <th scope="row">Radius</th>
                                    <td>0.94</td>
                                    <td>R☉</td>
                                </tr>
                                <tr>
                                    <th scope="row">Surface Temperature</th>
                                    <td>0.98</td>
                                    <td>T☉</td>
                                </tr>
                                <tr>
                                    <th scope="row">Lifetime </th>
                                    <td>1.08</td>
                                    <td>t☉</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>

                    </Row>
                </Col>

                <Col sm={2}>
                    Maalima Wiki
                </Col>
                
            </Row>
        </Container>
    )
}