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
                            Tukren, tongue of stone, is a fictional, naturalistic constructed language I designed for the Rohīren people of the planet Maalima. It is the first of my constructed languages, a fact that no doubt makes itself apparent in this documentation. 
                            As a proto-language, Tukren serves only as a basis for the dialects spoken in my novels. For instance, the Hĭbord dialect used in my first novel will be a derivation of a blend of proto-Tukren and the language of the neighboring Hanatu. 
                            This document details the phonology, syntax, and grammar of proto-Tukren, and explains how to write and speak the language for any seeking to learn.
                        </p>
                        <p>
                            It serves as a root to all of the Tukren dialects, before the Rohīren colonies spread across the planet's surface.
                            My goal in developing the language was to convey the generic culture of the Rohīren. They are a traditionally xenophobic and religious people, largely content to live out their days in the stone halls of their colonies, working as a collective to further their species. 
                            This is represented in the language in a number of ways:
                        </p>
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
                                <li>au (Pronounced like "aw")</li>
                                <li>ai /ie/(Pronounced like "A" ) </li>
                            </ul>

                            <h3>Phonotactics</h3>
                            <h4>Syllable Shape</h4>
                            <p>(C)V(C)(C)</p>
                            <h6>Rules & Exceptions</h6>
                            <ul>
                                <li>Phonemes -y, -h, -w will never occur in the syllable coda.</li>
                                <li>A syllable must have an onset if it has a coda.</li>
                            </ul>
                            <h4>Phonemic Stress</h4>
                            <p>
                                The last syllable is always stressed, except in the case of irregular words. 
                                One such cause of irregularity can be seen in words with a long vowel in their second to last syllable. The stress in such words is placed on the second-to-last syllable.
                                For example: Hīren will be pronounced as /HEE/-/ren/ rather than /hee/-/REN/.
                            </p>
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
                            <p>
                                Tukren has a default word order of S-O-V, or subject-object-verb. Tukren also allows for topicalized sentences, in which the word order is switched to place emphasis on the topic of the sentence instead of the subject. In such cases, the articulation of each nouns differentiates between a topic and subject.
                                Additionally, Tukren is primarily Head-Final, meaning that the head of a noun or verb phrase follows its complements. 
                            </p>
                            <p>
                                When dealing with multiple objects, like in sentences with an indirect-object, the sentence order becomes S-IDO-DO-V.
                            </p>
                            <p>
                                Note that formal speech always places the Hīren God Radren as the topic of a statement so that his name is always spoken first. Breaking this rule is a social taboo in any colony. 
                            </p>
                            <h5>Examples</h5>
                            <Row>
                                <Col>
                                    <h6>Default Word Order</h6>
                                    <p>The person sees the fish</p>
                                    <p>Di'fam dai'rĩbik kim</p>
                                </Col>
                                <Col>
                                    <h6>Topicalized Word Order</h6>
                                    <p>The king hears God</p>
                                    <p>Do'radren di'barnakim mis</p>
                                </Col>
                            </Row>
                            <h4>Adjectives</h4>
                            <p>Adjectives always precede the head of the noun phrase.</p>
                            <Row>
                                <h5>Examples</h5>
                                <Col>
                                    <p>The person sees the big fish</p>
                                    <p>Di'fam tazk kul'ribik kim</p>
                                </Col>
                                <Col>
                                    <p>The person sees the fishy big thing</p>
                                    <p>Di'fam ribik sau'tazk kim</p>
                                </Col>
                            </Row>
                            
                            <h4>Adposition</h4>
                            <p>Tukren uses post-position/post-positional phrases. In the case of multiple postpositions, they are placed in the order of Time->Manner->Place.</p>
                            <Row>
                                <h5>Examples</h5>
                                <Col>
                                    <p>The moon shines above the river</p>
                                    <p>Ku'kailrog qib sau'maruz sazl</p>
                                </Col>
                                <Col>
                                    <p>The moon shines above the river at night.</p>
                                    <p>Ku'kailrog wod con qib sau'maruz sazl</p>
                                </Col>
                            </Row>
                            <h4>Possession</h4>
                            <p>The possessor precedes the possessee when showing possession. The possessor is marked with its corrosponding gentitive article, while the possessee is either left without an article or marked with its normal case.</p>
                            <Row>
                                <h5>Examples</h5>
                                <Col>
                                    <p>The King's chamber</p>
                                    <p>Mi'barnakim zlat</p>
                                </Col>
                                <Col>
                                    <p>The path of the Temple.</p>
                                    <p>Dom'yirtal si'biwar</p>
                                </Col>
                            </Row>
                            <h4>Adverbs</h4>
                            <p>Adverbs can be positioned somewhat freely: before or after the subject or before the verb.</p>
                            <Row>
                                <h5>Examples</h5>
                                <Col>
                                    <p>Bordekya is very large.</p>
                                    <p>Bordekya tazk sit yen.</p>
                                </Col>
                                <Col>
                                    <p>The river is very long.</p>
                                    <p>Maruz sit zun yen.</p>
                                </Col>
                            </Row>
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
                            <p>
                                Proto-Tukren does not differentiate between definite and indefinite articles.
                                Instead articulation is broken down into six cases: nominative, accussative, genative, dative, locative, and instrumental. 
                                It is further divided into the genders of Neutral, Unfamiliar/Alien, Inanimate, and Formal/Religious.  
                            </p>
                            <ul>Case
                                <li>
                                    Nominative nouns are the subject of a sentence. 
                                </li>
                                <li>
                                    Accussative marks the direct object. 
                                </li>
                                <li>
                                    Genative marks a noun's origin or possessor.
                                </li>
                                <li>
                                    Dative marks the indirect object.
                                </li>
                                <li>
                                    Instrumental marks a noun used to achieve the verb.
                                </li>
                            </ul>
                            <ul>Gender
                                <li>
                                    Neutral nouns refer to most nouns referencing fellow colony members or herd animals owned by the colony. 
                                </li>
                                <li>
                                    Unfamiliar/Alien nouns typically refer to people or animals from outside the colony. To refer to a fellow colony member with this article would be considered an insult.
                                </li>
                                <li>
                                    Inanimate nouns are any that are not considered sentient. While this obviously refers to tools and landmarks, it is important to note that stone is not considered inanimate in certain context and may be refered to with any of the other genders.
                                </li>
                                <li>
                                    Formal/religious articles are used with nouns that refer to Radren, the Temple, any religious practices, and any contexts in which one must convey respect.
                                </li>
                            </ul>
                            <p>
                                Due to the complexity of articulation, much of informal speech neglects the use of articulation. However, formal speech and irregular sentences rely on articulation to convey correct meaning. 
                            </p>
                            <TukrenArticleTable/>
                            <h4>Pronouns</h4>
                            <p>
                                Pronouns are separated into five cases, and then further divided into eight points of view.
                                Most of these cases are shared with those used in articulation. An important disctinction is the difference between a possessive pronoun and a genitive pronoun.
                                A possessive pronoun is like 'my' in English. "My home" or "Yani dek". A genitive pronoun is like "mine". "That is mine" or "Birm fuyo yen". 
                            </p>
                            <TukrenPronounTable/>

                            <h4>Affixes</h4>
                            <h6>Plurality</h6>
                            <p>Plurality is marked by the ro- prefix. This is where the word Rohīren comes from: Ro means many, Hīren means a person of stone</p>
                            <h6>Association</h6>
                            <p>--A person associated with-- is marked by the na- prefix. In English this is done with the -er suffix, as in "hunter".</p>
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
                                    <p>Haket y tec</p>
                                </Col>
                                <Col>
                                    <h6>Second Person</h6>
                                    <p>He is angry</p>
                                    <p>Gakep bos doc</p>
                                </Col>
                                <Col>
                                    <h6>Third Person</h6>
                                    <p>That is not a fish</p>
                                    <p>Ku'haribik birm yen</p>
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
                            <p>She eats the fish</p>
                            <p>Fi kul'ribik gorm atiz</p>
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