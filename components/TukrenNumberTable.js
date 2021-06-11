import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TukrenArticleTable() {
    return(
        <Row>
            <Col>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Base 6</th>
                            <th scope="col">Base 10</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Din</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dima</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Basl</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Bos</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Yan</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Yust</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}