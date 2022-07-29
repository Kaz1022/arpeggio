import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../scss/custom.scss';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: rgba(187, 13, 190, 0.8);
  }

  .navbar-brand {
    color: #49205E;
    font-weight: bold;
    font: roboto;
    font-size: 3.5em;
    margin-left: 0.5em;
  }

  .navbar-nav, .navbar-link {
    color: #E2EF70;

    &:hover {
      color: #E2EF70;
    }
  }
`;

function Nav2(props) {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">ARPEGGIO</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/favourite">MY FAVOURITES</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/favourite">MY FAVOURITES</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default Nav2;