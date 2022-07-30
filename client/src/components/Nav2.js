import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import '../scss/custom.scss';
import styled from 'styled-components';

const Styles2 = styled.div`
  .navbar {
    background-color: rgba(187, 13, 190, 0.8);
  }

  .navbar-brand{
    font-family: var(--bs-font-sans-serif);
    font-size: 3em;
    color: #49205E;
  }

  .navbar-nav, .nav-item, .nav-link {
    font-family: var(--bs-font-sans-serif);
    color: #E2EF70;
    font-weight: bold;
    font-size: 20px;
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
    <Styles2>
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
    </Styles2>
  );
}

export default Nav2;