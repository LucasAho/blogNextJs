import LexList from "../../../api/lexicon-api";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export default function Lexicon() {
    return(
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Tukren</th>
                        <th scope="col">Part of Speech</th>
                        <th scope="col">English</th>
                    </tr>
                </thead>
                <tbody>
                    {LexList.map(word => {
                        return(
                            <tr>
                                <th scope="row">{word.Tukren}</th>
                                <td>{word.PoS}</td>
                                <td>{word.English}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
} 