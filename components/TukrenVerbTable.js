import Table from 'react-bootstrap/Table';

export default function TukrenArticleTable() {
    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Perfective</th>
                    <th scope="col">Imperfective</th>
                    <th scope="col">Habitual</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Colony Past</th>
                    <td>Nodof</td>
                    <td>Nodin</td>
                    <td>Noduk</td>
                </tr>
                <tr>
                    <th scope="row">Lifetime Past</th>
                    <td>Gof</td>
                    <td>Binof</td>
                    <td>Goden</td>
                </tr>
                <tr>
                    <th scope="row">Recent Past</th>
                    <td>Sahil</td>
                    <td>Bin</td>
                    <td>Sudan</td>
                </tr>
                <tr>
                    <th scope="row">Present</th>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th scope="row">Future</th>
                    <td>Nat</td>
                    <td>Nabi</td>
                    <td>Nadun</td>
                </tr>
                <tr>
                    <th scope="row">Colony Future</th>
                    <td>Kob</td>
                    <td>Koben</td>
                    <td>Dunekta</td>
                </tr>
            </tbody>
        </Table>
    )
}