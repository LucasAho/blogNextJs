
import Head from 'next/head';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../../components/blogNav';
import LangSideBar from '../../../components/LangSideBar';
import { useState } from "react";
import { Element } from 'react-scroll';
import ConLangLayout from '../../../components/conlangLayout';
import PhonologyTable from '../../../components/PhonologyTable';

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
                    <h2>Voice of Stone</h2>
                    <Element id='phon' name='phon'>
                        <ConLangLayout>
                            <h6>Phonology</h6>
                            <p>Note that sounds follow IPA pronounciation. <br/> Visit <a target="_blank" href="https://www.ipachart.com/">IPA Chart</a> to learn more. </p>
                            <PhonologyTable/>
                        </ConLangLayout>
                    </Element>
                    <Element id='root' name='root'>
                        <ConLangLayout>
                            <h6>Root Words</h6>
                            <p>Tukren root words, built off of the Swadesh list. <br/> Visit <a target="_blank" href="https://en.wikipedia.org/wiki/Swadesh_list">Swadesh List</a></p>
                            
                        </ConLangLayout>
                    </Element>
                    <Element id='phrase' name='phrase'>
                        <ConLangLayout>
                            <h6>Common Phrases</h6>
                        </ConLangLayout>
                    </Element>
                    <Element id='syntax' name='syntax'>
                        <ConLangLayout>
                            <h6>Syntax</h6>
                        </ConLangLayout>
                    </Element>
                    <Element id='nums' name='nums'>
                        <ConLangLayout>
                            <h6>Numbers</h6>
                        </ConLangLayout>
                    </Element>
                    <Element id='nouns' name='nouns'>
                        <ConLangLayout>
                            <h6>Nouns</h6>
                        </ConLangLayout>
                    </Element>
                    <Element id='verbs' name='verbs'>
                        <ConLangLayout>
                            <h6>Verbs</h6>
                        </ConLangLayout>
                    </Element>
                    <Element id='words' name='words'>
                        <ConLangLayout>
                            <h6>Dictionary</h6>
                        </ConLangLayout>
                    </Element>
                </Col>
                <Col sm={2}>
                    <LangSideBar/>
                </Col>
            </Row>
        </Container>
    )
}
