import Link from 'next/link';
import Head from 'next/head';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../../components/blogNav';
import LangSideBar from '../../../components/LangSideBar';
import { Element } from 'react-scroll';
import ConLangLayout from '../../../components/conlangLayout';
import PhonologyTable from '../../../components/PhonologyTable';
import TukrenArticleTable from '../../../components/TukrenArticleTable';
import TukrenPronounTable from '../../../components/TukrenPronounTable';
import TukrenVerbTable from '../../../components/TukrenVerbTable';

export default function Tukren() {
    return (
        <Container>
            <Head>
                <title>Tukren Documentation</title>
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
                <Col sm={2}>
                    Maalima Wiki
                </Col>
                <Col sm={8}>
                    <h2>Voice of Stone</h2>
                    <Element id='phon' name='phon'>
                            <h4>Phonology and Orthography</h4>
                            <p>Note that sounds follow IPA pronounciation. <br/> Visit <a target="_blank" href="https://www.ipachart.com/">IPA Chart</a> to learn more. </p>
                            <PhonologyTable/>
                            <h5>Syllable Structure</h5>
                            <p>CV(C)(C)</p>
                    </Element>
                    <Element id='phrase' name='phrase'>
                        <h4>Common Phrases</h4>
                    </Element>
                    <Element id='syntax' name='syntax'>
                        <h4>Syntax</h4>
                        <h5>Word Order</h5>
                        <p>S-O-V by default</p>
                        <p>S-IDO-DO-V when speaking of multiple objects</p>
                        <p>Topic of a sentence can replace the Subject, and it is the job of articulation to specificy part of speech</p>
                        <p>The God Radren is always the topic of a statement, and is always spoken first.</p>
                        <h5>Adposition</h5>
                        <p>Tukren is head-final, and uses prepositions/prepositional phrases in the order of Time->Manner->Place</p>
                        <h5>Adjectives</h5>
                        <p>Adjectives always precede nouns.</p>
                        <h5>Adverbs</h5>
                        <p>Adverbs can be freely positioned before or after the subject or before the verb.</p>
                    </Element>
                    <Element id='nums' name='nums'>
                        <h4>Numbers</h4>
                    </Element>
                    <Element id='nouns' name='nouns'>
                        <h4>Noun Morphology</h4>
                        <h5>Articles</h5>
                        <TukrenArticleTable/>
                        <h5>Pronouns</h5>
                        <TukrenPronounTable/>
                        <h5>AFfixs</h5>
                        <p>Plurality is marked by the ro- prefix</p>
                        <p>A person associated with... is marked by the na- prefix. In English this is done with the -er suffix, as in "hunter".</p>
                    </Element>
                    <Element id='verbs' name='verbs'>
                        <h4>Verb Morphology</h4>
                        <h5>Verb Conjugation</h5>
                        <p>
                            If verb has front vowels, V = i or e. <br/>
                            If verb has back vowels, V = u or o. <br/>
                            If verb has mixed vowels, change last vowel in verb to match harmony of first vowel and V = a. <br/>
                            If V is not a, V is the harmony pair of the last vowel in the verb. <br/>
                        </p>
                        <TukrenVerbTable/>
                        <h5>Examples</h5>
                        <h6>Colony Past Perfective</h6>
                        <p>Our ancestors carved Bordekya</p>
                        <p>Kaizli ronodar Bordekya gosufmok</p>
                        <h6>Lifetime Past Habitual</h6>
                        <p>I once ate fish frequently</p>
                        <p>Y ribik gormgufu </p>
                        <h6>Recent Past Imperfective</h6>
                        <p>He was smithing a farming tool</p>
                        <p>Fo sokutz sau'ketenwi</p>
                        <h6>Present</h6>
                        <p>I am eating fish</p>
                        <p>Y ribik gorm</p>
                        <h6>Future Perfective</h6>
                        <p>The temple will command the King</p>
                        <p>O'Yirtal die'barnakim catiznet</p>
                        <h6>Colony Future Habitual</h6>
                        <p>We will search for the Old Stone</p>
                        <p>Doc'radren kai damiskebi</p>
                    </Element>
                    <Element id='words' name='words'>
                        <h6><Link href="/worldbuild/conlang/tuk/lexicon">Dictionary</Link></h6>
                    </Element>
                </Col>
                <Col sm={2}>
                    <LangSideBar/>
                </Col>
            </Row>
        </Container>
    )
}
