import React from 'react';
import {Nav,Navbar,Button,Container} from 'react-bootstrap';
import styled from 'styled-components';
import '../scss/custom.scss';
// import '../scss/_fonts.scss';  //when I insert this it puts the fonts but removes the colour


const Styles = styled.div`
  .navbar{
    background-color: #49205E;
  }
  .navbar-brand{
    font-family: var(--bs-font-sans-serif);
    font-size: 3rem;
    color:$dark;
  }
`;

function NavigationBar() {
 return (
  <Styles>
   <Navbar bg="light" expand="lg">
    <Container fluid>
     <Navbar.Brand href="#">ARPEGGIO</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
      <Nav
       className="me-auto my-1 my-lg-0"
       style={{ maxHeight: '100px' }}
       navbarScroll
      >
       <Button variant="primary" href="#login" className="m-1">Log In</Button>
       <Button variant="dark"href="#signup" className="m-1">Sign Up</Button>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </Styles>
 );
}

export default NavigationBar;