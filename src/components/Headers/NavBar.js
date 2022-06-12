import {React} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Intercept Assessment
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/clients"}
                  className="nav-link">
                  Client List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/clients/create"} className="nav-link">
                  Create Client
                </Link>
              </Nav>
            </Nav>
            </Container>
          </Navbar>
        </header>
    );
};

export default NavBar;
