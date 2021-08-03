import Container from "react-bootstrap/Container";
import Scroll from 'react-scroll';

export default function LangSideBar() {
    const scroller = Scroll.scroller;

    
    const handleScroll = id => {
        scroller.scrollTo(id, {
            duration: 100,
            smooth: true
        });
    }

    return (
        <Container className='px-1'>
            <h6>Table of Contents</h6>
            <ul>
                <li><a onClick={() => handleScroll('intro')}>Intro</a></li>
                <li><a onClick={() => handleScroll('phon')}>Phonology</a></li>
                <li><a onClick={() => handleScroll('syntax')}>Syntax</a></li>
                <li><a onClick={() => handleScroll('nums')}>Numbers</a></li>
                <li><a onClick={() => handleScroll('nouns')}>Noun Morphology</a></li>
                <li><a onClick={() => handleScroll('verbs')}>Verb Morphology</a></li>
                <li><a onClick={() => handleScroll('words')}>Lexicon</a></li>
            </ul>
        </Container>
    )
}
