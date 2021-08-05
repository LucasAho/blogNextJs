import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from "react-bootstrap/Pagination";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlogNav from "./blogNav";
import DictionaryForm from "./DictionaryForm";


function Lexicon(props){
    const words = props.words
    const [word, setWord] = useState({});
    const tableSorter = type => {
        return words.sort(function (a, b) {
            var wordA = a[type].toUpperCase(); // ignore upper and lowercase
            var wordB = b[type].toUpperCase(); // ignore upper and lowercase
            if (wordA < wordB) {
                return -1;
            }
            if (wordA > wordB) {
                return 1;
            }
            return 0;
        })
    };
    
    const [wordObj, setWords] = useState(()=>tableSorter('conlang'));

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} >
            {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
        <br />

    </div>
    );

    return(
        <Container>
            {word.english !== undefined ?
            <>
            <Card>
                <Card.Header><h5>{word.conlang}</h5></Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text>English Definition: {word.english}</Card.Text>
                            <Card.Text>
                                Part of Speech: {word.pos}
                            </Card.Text>
                            <Card.Text>
                                Used in a sentence: &nbsp;  
                                {word.sentence} 
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <hr/>
            </>
            :
            null
            }
            <Table striped bordered hover>
                <thead className="purple-bg text-white">
                    <tr>
                        <th scope="col" >
                            Tukren
                            <Button onClick={() => setWords(tableSorter("conlang"))}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
                            </Button>
                        </th>
                        <th scope="col">
                            Part of Speech
                            <Button onClick={() => setWords(tableSorter("pos"))}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
                            </Button>
                        </th>
                        <th scope="col">
                            English
                            <Button onClick={() => setWords(tableSorter("english"))}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {wordObj.map((word, i)=> {
                        return(
                            <tr key={i++} onClick={()=> setWord(word)}>
                                <th scope="row">{word.conlang}</th>
                                <td>{word.pos}</td>
                                <td>{word.english}</td>
                            </tr>
                        )
                        
                    })}
                </tbody>
                {paginationBasic}
            </Table>
        </Container>
    )
} 


export default Lexicon;