import Link from 'next/link';
import Head from 'next/head';
import API from '../../api/blog-api';
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogNav from '../../../components/blogNav';
import LangSideBar from '../../../components/LangSideBar';
import { Footer } from '../../../components/footer2';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhonologyTables from '../../../components/PhonologyTables';
import TukrenArticleTable from '../../../components/TukrenArticleTable';
import TukrenPronounTable from '../../../components/TukrenPronounTable';
import TukrenVerbTable from '../../../components/TukrenVerbTable';
import TukrenNumberTable from '../../../components/TukrenNumberTable';
import TukrenLexicon from '../../../components/TukrenLexicon';

function Tukren({ words }) {
    const [phonShow, setPhonShow] = useState(true);
    const [synShow, setSynShow] = useState(true);
    const [morphShow, setMorphShow] = useState(true);
    const [numShow, setNumShow] = useState(true);
    const [dictShow, setDictShow] = useState(true);
    const [orthoShow, setOrthoShow] = useState(true);

    function togglePhonology(){
        setPhonShow(!phonShow)
    }
    function toggleOrtho(){
        setOrthoShow(!orthoShow)
    }
    function toggleSyntax(){
        setSynShow(!synShow)
    }
    function toggleMorphology(){
        setMorphShow(!morphShow)
    }
    function toggleNumbers(){
        setNumShow(!numShow)
    }
    function toggleDiction(){
        setDictShow(!dictShow)
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
                <Col sm={10}>
                    <h1 className={'text-center'}>Voice of Stone - a Guide on Proto-Tukren</h1>
                    <Element id='intro' name='intro'>
                        <h2>Introduction</h2>
                        <p>
                            Tukren, tongue of stone, is a fictional, naturalistic constructed language designed for the Rohīren people of the planet Maalima. This is the first of my constructed languages and is currently the most developed. 
                            The dialect of Tukren spoken by the ethnic Hībord in my novels will be an offshoot of this language, developed in the blending of proto-Tukren and the language of the neighboring Hanatu people. 
                        </p>
                        <p>
                            This document details the phonology, syntax, and grammar of proto-Tukren. It serves as a root to all of the Tukren dialects, before the Rohīren colonies spread across the planet's surface.
                            This language is designed to convey the generic culture of the Rohīren. They are a traditionally xenophobic and religious people, largely content to live out their days in the stone halls of their colonies, working as a collective to further their species. 
                        </p>
                            This is represented in the language in a number of ways:
                        <ul>
                            <li>
                                Verb tensing is temporally precise as a result of their long histories and collectivist thinking. 
                            </li>
                            <li>
                                Nouns are articulated to differentiate between colony members and outsiders, and between religious and secular ideas. 
                            </li>
                            <li>
                                Syntax morphs around relgious titles and phrases; the importance of O'radren and Yirtal are topicalized any time the names are uttered. 
                            </li>
                            <li>
                                Root words are heavily influenced by the stone environment they inhabit. 
                            </li>
                            <li>
                                Orthography also finds influence in stone, beginning as their history was etched into their halls with straight lines and sharp angles. 
                                Eventually, the mediums of ink and parchment would find use, but the straight-lined etchings of the orthography's origin would forever leave its mark on the writing style.   
                            </li>
                        </ul>
                    </Element>

                    <Element id='phon' name='phon'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={togglePhonology}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}} size="lg" icon={['fas', 'angle-down']} />
                            <h2>Phonology</h2>
                        </div>
                        <div style={{
                            display: phonShow ?"block":"none"
                        }}>
                            <p>
                                Tukren contains 21 consonants, 6 vowels and long vowels, and 4 diphthongs. 
                            </p>
                            <p>
                                These phonemes are based on the International Phonetic Alphabet, a collection of all the sounds producable by human anatomy. 
                                If you would like to learn more about the IPA and how to pronounce these sounds, visit the <a target="_blank" href="https://www.ipachart.com/">IPA Chart</a> for an excellent source on pronounciation. 
                            </p>
                            <p>
                                Some of these sounds have been latinized for the sake of a Western audience. Letters like ɮ are displayed with their latinized pronounciation first and their IPA symbol marked second (e.g. zl /ɮ/).
                            </p>
                        
                            <h3>Phonemes</h3>
                            <PhonologyTables/>
                            <h4>Diphthongs</h4>
                            <ul>
                                <li>ei /ai/ (Pronounced like "I")</li>
                                <li>au (Pronounced like "aw"</li>
                                <li>ai /ie/(Pronounced like "A" ) </li>
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
                            <p>The last syllable is always stressed, except in the case of irregular words.</p>
                        </div>
                    </Element>

                    <Element id='syntax' name='syntax'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleSyntax}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}}  size="lg" icon={['fas', 'angle-down']} />
                            <h2>Syntax</h2>
                        </div>
                        <div style={{
                            display: synShow ?"block":"none"
                        }}>
                            <h4>Word Order</h4>
                            <p>S-O-V by default. This means that the subject of a sentence is said first, then the object, and then the verb last.</p>
                            <h6>Example</h6>
                            <p>The person sees the fish</p>
                            <p>Di'fam dai'rĩbik kim</p>

                            <h4>Head Directionality</h4>
                            <p>
                                Tukren is a Head-Final language. This means that in a verb phrase, the verb is spoken last. In a noun phrase, the noun is spoken last. 
                                This is most easily represented with adjectives. A noun can be used as an adjective by preceding another noun, the final noun being the head of the phrase.
                            </p>

                            <h4>Adjectives</h4>
                            <p>As stated previously, adjectives always precede their nouns.</p>
                            <h6>Example 1</h6>
                            <p>The person sees the big fish</p>
                            <p>Di'fam tazk kul'ribik kim</p>

                            <h6>Example 2</h6>
                            <p>The person sees the fishy giant</p>
                            <p>Di'fam ribik dai'tazk kim</p>

                            <h4>Adposition</h4>
                            <p>Tukren uses post-position/post-positional phrases in the order of Time->Manner->Place. Post-position words are derived from verbs</p>
                            <h6>Example 1</h6>
                            <p>The man is in the mountain</p>
                            <p>Di'fen do'durog wem</p>

                            <h6>Example 2</h6>
                            <p>The moon shines above the river</p>
                            <p>Ku'kailrog sau'maruz sazl qib</p>

                            <h4>Possession</h4>
                            <p>Possessor preceds possessee</p>
                            <h6>Example</h6>
                            <p>The King's chamber</p>
                            <p>Si'barnakim zlat</p>

                            <h4>Adverbs</h4>
                            <p>Adverbs can be freely positioned before or after the subject or before the verb.</p>
                            <h4>Other Exceptions in Word Order</h4>
                            <p>S-IDO-DO-V when speaking of multiple objects</p>
                            <p>Topic of a sentence can replace the Subject, and it is the job of articulation to specificy part of speech</p>
                            <p>The God Radren is always the topic of a statement, and is always spoken first.</p>
                        </div>
                    </Element>
                    
                    <Element id='deriv' name='deriv'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleMorphology}>
                            
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}} size="lg"  icon={['fas', 'angle-down']} />
                            <h2>Morphology</h2>
                        </div>
                        <div style={{
                            display: morphShow ?"block":"none"
                        }}>
                            <h3>Noun Morphology</h3>
                            <h4>Articles</h4>
                            <TukrenArticleTable/>
                            <h4>Pronouns</h4>
                            <TukrenPronounTable/>
                            <h4>Affixes</h4>
                            <h6>Plurality</h6>
                            <p>Plurality is marked by the ro- prefix</p>
                            <h6>Association</h6>
                            <p>A person associated with... is marked by the na- prefix. In English this is done with the -er suffix, as in "hunter".</p>
                            <h6>Negation</h6>
                            <p>Nouns are negated with the ha- prefix.</p>
                            
                            <h3>Verb Morphology</h3>
                            <h4>Verb Tense</h4>
                            <TukrenVerbTable/>
                            <p>
                                The tense of a verb is indicated with a tense marker following the full verb phrase. 
                            </p>
                            <h5>Examples</h5>
                            <Row>
                                <Col>
                                    <h6>Perfective Aspect</h6>
                                    <p>
                                        The First King carved Bordekya.
                                    </p>
                                    <p>
                                        O'tadin barakim sau'bordekya gosuhf nodof.
                                    </p>
                                </Col>
                                <Col>
                                    <h6>Imperfective Aspect</h6>
                                    <p>
                                        The carving guild was congregating.
                                    </p>
                                    <p>
                                        Di'roheihli motpar nodin
                                    </p>
                                </Col>
                                <Col>
                                    <h6>Habitual Aspect</h6>
                                    <p>
                                        The colony searched.
                                    </p>
                                    <p>
                                        Di'famot damis noduk.
                                    </p>
                                </Col>
                            </Row>
                            <h4>Linking Verbs</h4>
                            <p>
                                A linking verb links the subject of a sentence to its subject complement. This is used to describe or re-identify the noun. 
                                In Tukren, there are three linking verbs: tec for first person, doc for second person, and yen for third person. 
                            </p>
                            <Row>
                                <h5>Examples</h5>
                                <Col>
                                    <h6>First Person</h6>
                                    <p>I am unmoving</p>
                                    <p>Y tec haket</p>
                                </Col>
                                <Col>
                                    <h6>Second Person</h6>
                                    <p>He is angry</p>
                                    <p>Bos doc gakep</p>
                                </Col>
                                <Col>
                                    <h6>Third Person</h6>
                                    <p>That is not a fish</p>
                                    <p>Birm yen ku'haribik</p>
                                </Col>
                            </Row>
                            <h4>Passive Verbs</h4>
                            <p>
                                Passive verbs are recieved by the subject, rather than by the object.
                            </p>
                            <p>
                                In Tukren, passive verbs are marked with the suffix -par.
                            </p>
                            <h5>Example</h5>
                            <p>
                                The fish is eaten
                            </p>
                            <p>
                                Ku'ribik gormpar
                            </p>

                            <h4>Transitive Verbs</h4>
                            <p>
                                A transitive verb requires a object to receive the verb. In English, this is seen in verbs like 'give' and 'need'.
                            </p>
                            <p>
                                In Tukren, transitive verb phrases are ended with the auxilliary verb atiz.
                            </p>
                            <h5>Example</h5>
                            <p>The colony needs the mountain.</p>
                            <p>Di'famot sau'durog kob atiz</p>
                        </div>
                    </Element>
                    <Element id='nums' name='nums'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleNumbers}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}}  size="lg" icon={['fas', 'angle-down']} />
                            <h2>Numbers</h2>
                        </div>
                        <div style={{
                            display: numShow ?"block":"none"
                        }}>
                            <p>Tukren uses a base 6 number system. Hexagon is the bestagon afterall.</p>
                            <Row>
                                <Col>
                                    <TukrenNumberTable/>
                                </Col>
                                <Col>
                                    <h4>Ordinal Numbers</h4>
                                    <p>First : Tadin</p>
                                    <p>Second : Tadima</p>
                                    <p>Third : Tabasl</p>
                                </Col>
                            </Row>
                        </div>
                    </Element>
                    <Element id='ortho' name='ortho'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleOrtho}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}}  size="lg" icon={['fas', 'angle-down']} />
                            <h2>Orthography</h2>
                        </div>
                        <div style={{
                            display: orthoShow ?"block":"none"
                        }}>
                            <p>Work in progress</p>
                        </div>
                    </Element>
                    <Element id='words' name='words'>
                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}} onClick={toggleDiction}>
                            <hr></hr>
                            <FontAwesomeIcon style={{float: 'right', color: "#bec7ca"}}  size="lg" icon={['fas', 'angle-down']} />
                            <h2>Lexicon</h2>
                        </div>
                        <div style={{
                            display: dictShow ?"block":"none"
                        }}>
                            <p></p>
                            <TukrenLexicon words={words}/>
                        </div>
                    </Element>
                </Col>
                <Col sm={2}>
                    <LangSideBar/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export async function getStaticProps() {
    const res = await API.getAllWords();
    return {
        props: {
            words: res.data
        }
    }
}

export default Tukren;