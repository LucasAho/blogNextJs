import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../../components/blogNav';
import LangSideBar from '../../../components/LangSideBar';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhonologyTables from '../../../components/PhonologyTables';
import TukrenArticleTable from '../../../components/TukrenArticleTable';
import TukrenPronounTable from '../../../components/TukrenPronounTable';
import TukrenVerbTable from '../../../components/TukrenVerbTable';
import TukrenNumberTable from '../../../components/TukrenNumberTable';

export default function Tukren() {
    const [phonShow, setPhonShow] = useState(false);
    const [synShow, setSynShow] = useState(false);
    const [morphShow, setMorphShow] = useState(false);

    function togglePhonology(){
        setPhonShow(!phonShow)
    }
    function toggleSyntax(){
        setSynShow(!synShow)
    }
    function toggleMorphology(){
        setMorphShow(!morphShow)
    }
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
                <Col sm={8}>
                    <h1>Voice of Stone</h1>
                    <Element id='intro' name='intro'>
                        <h2>Introduction</h2>
                    </Element>
                    <Element id='phon' name='phon'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={togglePhonology}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}} icon={['fas', 'angle-down']} />
                            <h2>Phonology</h2>
                        </div>
                        <div style={{
                            display: phonShow ?"block":"none"
                        }}>
                            <p>
                                Tukren contains 21 consonants, 6 vowels and long vowels, and 4 diphthongs. 
                                <br/> 
                                Visit the <a target="_blank" href="https://www.ipachart.com/">IPA Chart</a> to learn how to pronounce these phonemes. 
                            </p>
                            <h3>Phonemes</h3>
                            
                            <PhonologyTables/>
                            
                            <h4>Diphthongs</h4>
                            <ul>
                                <li>ei /ai/ (Pronounced like "I")</li>
                                <li>au (Pronounced like "aw"</li>
                                <li>ai /ie/(Pronounced like "A" ) </li>
                                <li>ee /ei/ (Pronounced like "E")</li>
                            </ul>

                            <h3>Phonotactics</h3>
                            <h4>Syllable Shape</h4>
                            <p>(C)V(C)(C)</p>
                            <p><b>Exceptions</b></p>
                            <ul>
                                <li>Phonemes -y, -h, -w will never occur in the syllable coda.</li>
                                <li>A syllable must have an onset if it has a coda.</li>
                            </ul>
                            <h4>Phonemic Stress</h4>
                            <p>The last syllable is stressed except with irregular words.</p>
                        </div>
                    </Element>
                    <Element id='syntax' name='syntax'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleSyntax}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}} icon={['fas', 'angle-down']} />
                            <h2>Syntax</h2>
                        </div>
                        <div style={{
                            display: synShow ?"block":"none"
                        }}>
                            <h4>Word Order</h4>
                            <p>S-O-V by default</p>
                            <p>Tukren is a Head-Final language.</p>
                            <h6>Example</h6>
                            <p>The person sees the fish</p>
                            <p>Di fam dai rĩbik kim</p>
                            <h4>Adjectives</h4>
                            <p>Adjectives precede their nouns.</p>
                            <h6>Example</h6>
                            <p>The person sees the big fish</p>
                            <p>Di fam dai tazk ribik kim</p>
                            <h4>Adposition</h4>
                            <p>Tukren uses post-position/post-positional phrases in the order of Time->Manner->Place. Post-position words are derived from verbs</p>
                            <h6>Example</h6>
                            <p>The man is in the mountain</p>
                            <p>Di fen do durog wem</p>
                            <h4>Possession</h4>
                            <p>Possessor preceds possessee</p>
                            <h6>Example</h6>
                            <p>The King's chamber</p>
                            <p>Si barnakim zlat</p>
                            <h4>Adverbs</h4>
                            <p>Adverbs can be freely positioned before or after the subject or before the verb.</p>
                            {/*
                            <h4>Other Exceptions</h4>
                            <p>S-IDO-DO-V when speaking of multiple objects</p>
                            <p>Topic of a sentence can replace the Subject, and it is the job of articulation to specificy part of speech</p>
                            <p>The God Radren is always the topic of a statement, and is always spoken first.</p>
                            */}
                        </div>
                    </Element>
                    <Element id='deriv' name='deriv'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleMorphology}>
                            
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}} icon={['fas', 'angle-down']} />
                            <h2>Morphology</h2>
                        </div>
                        <div style={{
                            display: morphShow ?"block":"none"
                        }}>
                            <p>Plurality marked with 'ro-'</p>
                            <h3>Noun Morphology</h3>
                            <h4>Articles</h4>
                            <TukrenArticleTable/>
                            <h4>Pronouns</h4>
                            <TukrenPronounTable/>
                            <h4>Affixes</h4>
                            <p>Plurality is marked by the ro- prefix</p>
                            <p>A person associated with... is marked by the na- prefix. In English this is done with the -er suffix, as in "hunter".</p>
                            <h3>Verb Morphology</h3>
                            <h4>Auxilliary Verbs</h4>
                            <TukrenVerbTable/>
                            <h5>Examples</h5>
                            <Row>
                                <Col>
                                    <h6>Perfective Aspect</h6>
                                    <p>
                                        The First King carved Bordekya.
                                    </p>
                                    <p>
                                        O tadin barakim sau bordekya gosuhf nodof.
                                    </p>
                                </Col>
                                <Col>
                                    <h6>Imperfective Aspect</h6>
                                    <p>
                                        The carving guild was forming.
                                    </p>
                                    <p>
                                        Di roheihli mot nodin
                                    </p>
                                </Col>
                                <Col>
                                    <h6>Habitual Aspect</h6>
                                    <p>
                                        The colony searched.
                                    </p>
                                    <p>
                                        Di famot damis noduk.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Element>
                    <Element id='nums' name='nums'>
                        <h4>Numbers</h4>
                        <p>Tukren uses a base 6 number system. Hexagon is the bestagon afterall.</p>
                        <TukrenNumberTable/>
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
