import Table from "react-bootstrap/Table";

export default function PhonologyTable() {
    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Labial</th>
                    <th scope="col">Alveolar</th>
                    <th scope="col">Palatal</th>
                    <th scope="col">Velar</th>
                    <th scope="col">Uvular</th>
                    <th scope="col">Guttural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Plosive</th>
                    <td>b,p</td>
                    <td>t,d</td>
                    <td>c,ɟ</td>
                    <td>k</td>
                    <td>q,ɢ</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Nasal</th>
                    <td>m</td>
                    <td>n</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Fricative</th>
                    <td>f</td>
                    <td>s,z</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>h</td>
                </tr>
                <tr>
                    <th scope="row">Lat. Fricative</th>
                    <td></td>
                    <td>ɬ,ɮ</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Liquid</th>
                    <td></td>
                    <td>l,ɹ</td>
                    <td>j</td>
                    <td>w</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}