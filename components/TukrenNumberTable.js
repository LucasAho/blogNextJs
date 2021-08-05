import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

import { useState } from 'react';

export default function TukrenNumberTable() {
    const [active, setActive] = useState(1);
    const numberData = [
        [
            {
                number: "Hōwt",
                baseSix: "0",
                baseTen: "-"
            },
            {
                number: "Din",
                baseSix: "1",
                baseTen: "-"
            },
            {
                number: "Dima",
                baseSix: "2",
                baseTen: "-"
            },
            {
                number: "Basl",
                baseSix: "3",
                baseTen: "-"
            },
            {
                number: "Bos",
                baseSix: "4",
                baseTen: "-"
            },
            {
                number: "Yan",
                baseSix: "5",
                baseTen: "-"
            }
        ],
        [
            {
                number: "Yust",
                baseSix: "10",
                baseTen: "6"
            },
            {
                number: "Yusdin",
                baseSix: "11",
                baseTen: "7"
            },
            {
                number: "Yusdima",
                baseSix: "12",
                baseTen: "8"
            },
            {
                number: "Yustabasl",
                baseSix: "13",
                baseTen: "9"
            },
            {
                number: "Yustabos",
                baseSix: "14",
                baseTen: "10"
            },
            {
                number: "Yuyan",
                baseSix: "15",
                baseTen: "11"
            }
        ],
        [
            {
                number: "Dimayus",
                baseSix: "20",
                baseTen: "12"
            },
            {
                number: "Dimayus-din",
                baseSix: "21",
                baseTen: "13"
            },
            {
                number: "Dimayus-dima",
                baseSix: "22",
                baseTen: "14"
            },
            {
                number: "Dimayus-basl",
                baseSix: "23",
                baseTen: "15"
            },
            {
                number: "Dimayus-bos",
                baseSix: "24",
                baseTen: "16"
            },
            {
                number: "Dimayus-yan",
                baseSix: "25",
                baseTen: "17"
            }
        ],
        [
            {
                number: "Baslyu",
                baseSix: "30",
                baseTen: "18"
            },
            {
                number: "Baslyu-din",
                baseSix: "31",
                baseTen: "19"
            },
            {
                number: "Baslyu-dima",
                baseSix: "32",
                baseTen: "20"
            },
            {
                number: "Baslyu-basl",
                baseSix: "33",
                baseTen: "21"
            },
            {
                number: "Baslyu-bos",
                baseSix: "34",
                baseTen: "22"
            },
            {
                number: "Baslyu-yan",
                baseSix: "5",
                baseTen: "23"
            }
        ],
        [
            {
                number: "Boyust",
                baseSix: "40",
                baseTen: "24"
            },
            {
                number: "Boyus-din",
                baseSix: "41",
                baseTen: "25"
            },
            {
                number: "Boyus-dima",
                baseSix: "42",
                baseTen: "26"
            },
            {
                number: "Boyus-basl",
                baseSix: "43",
                baseTen: "27"
            },
            {
                number: "Boyus-bos",
                baseSix: "44",
                baseTen: "28"
            },
            {
                number: "Boyus-yan",
                baseSix: "45",
                baseTen: "29"
            }
        ],
        [
            {
                number: "Yanyo",
                baseSix: "50",
                baseTen: "30"
            },
            {
                number: "Yanyo-din",
                baseSix: "51",
                baseTen: "31"
            },
            {
                number: "Yanyo-dima",
                baseSix: "52",
                baseTen: "32"
            },
            {
                number: "Yanyo-basl",
                baseSix: "53",
                baseTen: "33"
            },
            {
                number: "Yanyo-bos",
                baseSix: "54",
                baseTen: "34"
            },
            {
                number: "Yanyo-yan",
                baseSix: "55",
                baseTen: "35"
            }
        ],
        [
            {
                number: "Nalot",
                baseSix: "100",
                baseTen: "36"
            },
            {
                number: "Nalot-yust",
                baseSix: "110",
                baseTen: "42"
            },
            {
                number: "Nalot-dimayu",
                baseSix: "120",
                baseTen: "48"
            },
            {
                number: "Nalot-baslyu",
                baseSix: "130",
                baseTen: "54"
            },
            {
                number: "Nalot-boyu",
                baseSix: "140",
                baseTen: "60"
            },
            {
                number: "Nalot-yanyo",
                baseSix: "150",
                baseTen: "66"
            }
        ],
        [
            {
                number: "Dīmalot",
                baseSix: "200",
                baseTen: "72"
            },
            {
                number: "Basllot",
                baseSix: "300",
                baseTen: "108"
            },
            {
                number: "Bosnalot",
                baseSix: "400",
                baseTen: "144"
            },
            {
                number: "Yānalot",
                baseSix: "500",
                baseTen: "180"
            },
            {
                number: "Duq",
                baseSix: "1,000",
                baseTen: "216"
            },
            {
                number: "Dimaduq",
                baseSix: "2,000",
                baseTen: "432"
            }
        ],
    ]
    let items = [];

    for (let number = 1; number <= numberData.length; number++) {
        items.push(
            <Pagination.Item className={(active === number ? 'active ' : '')} key={number} active={number === active} onClick={(event) => paginationClicked(event)}>
            {number}
            </Pagination.Item>,
        );
    }

    const paginationClicked = (event) => {
        var itemClicked = event.target.text;
        setActive(itemClicked);
        changeNumSet(numberChange(itemClicked))

    }

    const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
        <br />
    </div>
    );

    const numberChange = curActive => {
        return(
        numberData[curActive - 1].map((num, i) => {
            return (
                <tr>
                    <td width='33%'>{num.number}</td>
                    <td width='33%'>{num.baseSix}</td>
                    <td width='33%'>{num.baseTen}</td>
                </tr>
            )
        }));
    }
    const [numberSet, changeNumSet] = useState(numberChange(active));

    return(
        <Row>
            <Col>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th width="33%" scope="col">Number</th>
                            <th width="33%" scope="col">Base 6</th>
                            <th width="33%" scope="col">Base 10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numberSet}
                    </tbody>
                    {paginationBasic}
                </Table>
            </Col>
        </Row>
    )
}