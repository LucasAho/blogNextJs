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
        <Container className='px-1 lang-bar'>
            <h6>Table of Contents</h6>
            <ul>
                <li className="tocLink"><a onClick={() => handleScroll('intro')}>Intro</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('phon')}>Phonology</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('syntax')}>Syntax</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('deriv')}>Morphology</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('nums')}>Numbers</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('ortho')}>Orthography</a></li>
                <li className="tocLink"><a onClick={() => handleScroll('words')}>Lexicon</a></li>
            </ul>
        </Container>
    )
}
