import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from "react-bootstrap/Pagination";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Lexicon(props){
    const words = props.words
    const [word, setWord] = useState({});

    /////////////////////////////////////////////
    ///////////// TABLE SORT ////////////////////
    /////////////////////////////////////////////
    /*const tableSorter = type => {
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

    const setWords = (fn) => {
        //console.log(fn);
        let newSort = tableSorter(fn);
        changeDictionary(dictionaryMarker(newSort));
        changeWordSet(pageChange(active));
    }
    }*/
    /////////////////////////////////////////////
    ///////////// DICTIONARY ////////////////////
    /////////////////////////////////////////////
    const dictionaryMarker = inputArray => {
            
        var perChunk = 15 // items per chunk    
        //console.log(inputArray)
        var result = inputArray.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)

            if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }
            resultArray[chunkIndex].push(item)

            return resultArray
        }, []);

        return result;
    }

    const [dictionary, changeDictionary] = useState(dictionaryMarker(words));

    /////////////////////////////////////////////
    ///////////// PAGINATION ////////////////////
    /////////////////////////////////////////////
    const [active, setActive] = useState(1);
    let items = [];

    for (let number = 1; number <= dictionary.length; number++) {
        items.push(
            <Pagination.Item className={(active === number ? 'active ' : '')} key={number} active={number === active} onClick={(event) => paginationClicked(event)}>
            {number}
            </Pagination.Item>,
        );
    }

    const paginationClicked = (event) => {
        var itemClicked = event.target.text;
        setActive(itemClicked);
        changeWordSet(pageChange(itemClicked))
    }

    const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
        <br />
    </div>
    );

    const pageChange = curActive => {
        return(
            dictionary[curActive - 1].map((word, i)=> {
                return(
                    <tr key={i} onClick={()=> setWord(word)}>
                        <th scope="row">{word.conlang}</th>
                        <td>{word.pos}</td>
                        <td>{word.english}</td>
                    </tr>
                )
                
            })
        );
    }
    const [wordSet, changeWordSet] = useState(pageChange(active));


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
                            {/*<Button onClick={() => setWords("conlang")}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
        </Button>*/}
                        </th>
                        <th scope="col">
                            Part of Speech
                            {/* 
                            <Button onClick={() => setWords("pos")}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
                            </Button>
                            */}
                        </th>
                        <th scope="col">
                            English
                            {/*}
                            <Button onClick={() => setWords("english")}>
                                <FontAwesomeIcon icon={['fas', 'sort']} />
                            </Button>
                        */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {wordSet}
                </tbody>
                {paginationBasic}
            </Table>
        </Container>
    )
} 


export default Lexicon;