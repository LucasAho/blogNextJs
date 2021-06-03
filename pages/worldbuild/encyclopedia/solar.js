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
                        <h4>Planets (Most will remain unnamed until I have worked out the Hantui etymology for astronomy</h4>
                        
                        <h6>Planet 1</h6>
                        <p>Distance: 0.19au</p>
                        <p>Type: Terrestrial</p>
                        
                        <h6>Planet 2</h6>
                        <p>Distance: 0.38au</p>
                        <p>Type: Terrestrial</p>
                        
                        <h6>Planet 3</h6>
                        <p>Distance: 0.64au</p>
                        <p>Type: Terrestrial</p>
                        
                        <h6>Maalima</h6>
                        <p>Distance: 0.98au</p>
                        <p>Type: Terrestrial</p>
                        
                        <h6>Planet 5</h6>
                        <p>Distance: 1.67au</p>
                        <p>Type: Terrestrial</p>
        
                        <h6>Planet 6</h6>
                        <p>Distance: 2.61au</p>
                        <p>Type: Dwarf Planet</p>
                        
                        <h6>Planet 7</h6>
                        <p>Distance: 4.56au</p>
                        <p>Type: Gas Giant</p>
            
                        <h6>Planet 8</h6>
                        <p>Distance: 8.35au</p>
                        <p>Type: Gas Giant</p>
                        
                        <h6>Planet 9</h6>
                        <p>Distance: 12.02au</p>
                        <p>Type: Ice Giant</p>
                        
                        <h6>Planet 10</h6>
                        <p>Distance: 19.86au</p>
                        <p>Type: Ice Giant</p>
                        
                        <h6>Planet 11</h6>
                        <p>Distance: 36.02au</p>
                        <p>Type: Dwarf Planet</p>
                    </Row>
                </Col>

                <Col sm={2}>
                    Maalima Wiki
                </Col>
                
            </Row>
        </Container>
    )
}