import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function PhonologyTable() {
    return(
        <Container>
            <Row>
                <h4>Consonants</h4>
                <Table className="text-center mx-auto" striped bordered>
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th colspan={2} scope="col">Labial</th>
                            <th colspan={2} scope="col">Alveolar</th>
                            <th colspan={2} scope="col">Palatal</th>
                            <th scope="col">Velar</th>
                            <th colspan={2} scope="col">Uvular</th>
                            <th scope="col">Guttural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Plosive</th>
                            <td>b</td>
                            <td>p</td>
                            <td>t</td>
                            <td>d</td>
                            <td>c</td>
                            <td>kd/ɟ/</td>
                            <td>k</td>
                            <td>q</td>
                            <td>g/ɢ/</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Nasal</th>
                            <td colspan={2}>m</td>
                            <td colspan={2}>n</td>
                            <td colspan={2}></td>
                            <td></td>
                            <td colspan={2}></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Fricative</th>
                            <td colspan={2}>f</td>
                            <td>s</td>
                            <td>z</td>
                            <td colspan={2}></td>
                            <td></td>
                            <td colspan={2}></td>
                            <td>h</td>
                        </tr>
                        <tr>
                            <th scope="row">Lat. Fricative</th>
                            <td colspan={2}></td>
                            <td>hl/ɬ/</td>
                            <td>zl/ɮ/</td>
                            <td colspan={2}></td>
                            <td></td>
                            <td colspan={2}></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Liquid</th>
                            <td colspan={2}></td>
                            <td>l</td>
                            <td>r/ɹ/</td>
                            <td colspan={2}>j</td>
                            <td>w</td>
                            <td colspan={2}></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row> 
                <h4>Vowels</h4>
                <Table className="text-center mx-auto" striped bordered>
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th colspan={4} scope="col">Front</th>
                            <th colspan={4} scope="col">Central</th>
                            <th colspan={4} scope="col">Back</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">High</th>
                            <td>i  </td>
                            <td>ĩ/i:/</td>
                            <td colspan={2}></td>
                            <td colspan={4}></td>
                            <td>uh/ɯ/</td>
                            <td>ũh/ɯ:/</td>
                            <td>u</td>
                            <td>ũ/u:/</td>
                        </tr>
                        <tr>
                            <th scope="row">Middle</th>
                            <td colspan={2}></td>
                            <td>e/ø/</td>
                            <td>eh/ø:/</td>
                            <td colspan={4}></td>
                            <td colspan={2}></td>
                            <td>o</td>
                            <td>õ/o:/</td>
                        </tr>
                        <tr>
                            <th scope="row">Low</th>
                            <td colSpan={4}></td>
                            <td colSpan={2}>a</td>
                            <td colSpan={2}>ã/a:/</td>
                            <td colSpan={4}></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}