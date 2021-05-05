import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function BlogNav(props) {

    return (
        <Row className='my-2'>
            <Jumbotron className="text-center contrast-bg ">
                <Container className='my-2 py-2'>
                    <h1>{props.title}</h1>
                    <Navbar className="contrast-bg" expand="md">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav.Link className="nav-portfolio-link" href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="nav-portfolio-link" href="/worldbuild/home">Maalima</Nav.Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="mr-auto nav-justified" variant='pills'>
                                <NavDropdown title="Topics">
                                    <NavDropdown.Item href="#">Mental Health</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Politics</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Poetry</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Non-functional..." className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Jumbotron>
        </Row>
    )
}