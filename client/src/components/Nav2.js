import React from 'react';
import '../scss/custom.scss';
import {Nav, Navbar, NavDropdown, Dropdown, Form, Container, Button} from 'react-bootstrap'

function Nav2(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">ARPEGGIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav.Link href="#home">MY FAVOURITES</Nav.Link>
          <Nav>
            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
              Hello, Mari!<br/>Account
            </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <NavDropdown.Item href="#action/3.1">MY PROFILE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  CREATE A SESSION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">MY SESSIONS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  LOGOUT
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;