import Table from 'react-bootstrap/Table';

export default function TukrenArticleTable() {
    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th scope="col">POV</th>
                    <th scope="col">Nom.</th>
                    <th scope="col">Acc.</th>
                    <th scope="col">Poss.</th>
                    <th scope="col">Gen.</th>
                    <th scope="col">Reflex.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Y</td>
                    <td>Yo</td>
                    <td>Yani</td>
                    <td>Fuyo</td>
                    <td>Yarwon</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Bos</td>
                    <td>Bul</td>
                    <td>Boni</td>
                    <td>Foben</td>
                    <td>Rabon</td>
                </tr>
                <tr>
                    <th scope="row">3F</th>
                    <td>Fi</td>
                    <td>Fim</td>
                    <td>Fimi</td>
                    <td>Fufami</td>
                    <td>Rafin</td>
                </tr>
                <tr>
                    <th scope="row">3M</th>
                    <td>Fo</td>
                    <td>Fom</td>
                    <td>Fomi</td>
                    <td>Fufoma</td>
                    <td>Rafon</td>
                </tr>
                <tr>
                    <th scope="row">3N</th>
                    <td>Sen</td>
                    <td>Selt</td>
                    <td>Sani</td>
                    <td>Fensi</td>
                    <td>Rafeim</td>
                </tr>
                <tr>
                    <th scope="row">1Co</th>
                    <td>Kai</td>
                    <td>Kaiz</td>
                    <td>Kaizli</td>
                    <td>Fukai</td>
                    <td>Rakasl</td>
                </tr>
                <tr>
                    <th scope="row">2Co</th>
                    <td>Bi</td>
                    <td>Biz</td>
                    <td>Bizi</td>
                    <td>Fubiza</td>
                    <td>Rafu</td>
                </tr>
                <tr>
                    <th scope="row">3Co</th>
                    <td>Ned</td>
                    <td>Neida</td>
                    <td>Nedi</td>
                    <td>Funol</td>
                    <td>Rafna</td>
                </tr>
            </tbody>
        </Table>
    )
}