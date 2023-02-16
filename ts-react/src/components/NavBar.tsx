import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Sam's</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Subscribe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
