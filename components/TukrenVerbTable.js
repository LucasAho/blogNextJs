import Table from 'react-bootstrap/Table';

export default function TukrenArticleTable() {
    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Perf.</th>
                    <th scope="col">Imperf.</th>
                    <th scope="col">Habit.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Colony Past</th>
                    <td>-mVk</td>
                    <td>-mV</td>
                    <td>-mVsV</td>
                </tr>
                <tr>
                    <th scope="row">Lifetime Past</th>
                    <td>-gVf</td>
                    <td>-gV</td>
                    <td>-gVfV</td>
                </tr>
                <tr>
                    <th scope="row">Recent Past</th>
                    <td>-wVl</td>
                    <td>-wV</td>
                    <td>-wVlV</td>
                </tr>
                <tr>
                    <th scope="row">Present</th>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th scope="row">Future</th>
                    <td>-nVt</td>
                    <td>-nV</td>
                    <td>-nVtV</td>
                </tr>
                <tr>
                    <th scope="row">Colony Future</th>
                    <td>-kVb</td>
                    <td>-kV</td>
                    <td>-kVbV</td>
                </tr>
            </tbody>
        </Table>
    )
}