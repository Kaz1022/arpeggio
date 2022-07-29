import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import '../scss/custom.scss';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: rgba(187, 13, 190, 0.8);
  }

  .navbar-brand {
    color: #49205E;
    font-weight: bold;
    font: roboto;
    font-size: 3.5em;
  }

  .navbar-nav, .nav-item, .nav-link {
    color: #E2EF70;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 1px 1px 1px #49205E;
    margin-left: 1em;
  }

  .dropdown-menu {
    background-color: #070707;
  }

  .dropdown-item {
    color: white;
    background-color: #070707;

    &:hover {
      background-color: rgba(187, 13, 190, 0.8);
    }
  }
`;

function Nav2(props) {
  return (
    <Styles>
      <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="/">ARPEGGIO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/favourite">MY FAVOURITES</Nav.Link></Nav.Item>
            <NavDropdown title="Hello, Mari!" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MY PROFILE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CREATE A SESSION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MY SESSIONS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                LOGOUT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default Nav2;