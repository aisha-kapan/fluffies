import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function FluffyNav() {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fluffies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cats</Nav.Link>
            <Nav.Link href="#link">Dogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}