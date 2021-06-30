import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BlogNav from '../../../components/blogNav';

export default function Species() {
    return(
        <Container>
            <BlogNav 
                title="Maalima"
                t2Link="/"  
                title2="Blog"
                tLink="/worldbuild/home"
            />
            <Row>
                <h2>Hominid Species on Maalima</h2>
                <p>
                    After the human race attempted to transcend to the Hestafan plane in the first rift, Hestafa dispersed the race of humanity across the universe and cut them from the technology they had grown reliant on. 
                    On the planet of Maalima, this new dark age of technology and separation of cultures led to the eventual speciation of 4 new descendants of humanity.
                </p>
            </Row>
            <Row>
                <h3>Rohĩren</h3>
                <p>The first of these new humans took to the earth, hiding within the high mountains of the great Oinayara Mountain Range</p>
            </Row>
            <Row>
                <h3>Golani</h3>
                <p>Lost in the wastelands of the Shulreg, the Golani separated into tribes and mastered beast and land alike as their ancestors once had.</p>
            </Row>
            <Row>
                <h3>Hanatu</h3>
                <p>The Hanatu grew small and frail on their island homes, but regained their strength as they learned to change with the seas.</p>
            </Row>
            <Row>
                <h3>Arborians</h3>
                <p>The Arborians took to the dense jungles of Asurinya, slowly transforming to mirror their primitive ancestors of Earth. Masters of a life in the trees, the Arborians were soon alien even to the relatives around them.</p>
            </Row>
        </Container>
    )
}