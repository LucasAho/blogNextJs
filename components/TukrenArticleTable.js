import Table from 'react-bootstrap/Table';

export default function TukrenArticleTable() {
    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Nom.</th>
                    <th scope="col">Acc.</th>
                    <th scope="col">Gen.</th>
                    <th scope="col">Dat.</th>
                    <th scope="col">Loc.</th>
                    <th scope="col">Instr.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Neutral</th>
                    <td>Di</td>
                    <td>Dai</td>
                    <td>Mi</td>
                    <td>Dim</td>
                    <td>Baf</td>
                    <td>Nan</td>
                </tr>
                <tr>
                    <th scope="row">Unfamiliar</th>
                    <td>Ku</td>
                    <td>Kul</td>
                    <td>Kim</td>
                    <td>Kib</td>
                    <td>Kab</td>
                    <td>Kan</td>
                </tr>
                <tr>
                    <th scope="row">Inanimate</th>
                    <td>Si</td>
                    <td>Sau</td>
                    <td>Sim</td>
                    <td>Sob</td>
                    <td>Saf</td>
                    <td>Sun</td>
                </tr>
                <tr>
                    <th scope="row">Formal</th>
                    <td>O</td>
                    <td>Do</td>
                    <td>Dom</td>
                    <td>Doc</td>
                    <td>Dei</td>
                    <td>No</td>
                </tr>
            </tbody>
        </Table>
    )
}