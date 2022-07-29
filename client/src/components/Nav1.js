import React from 'react';
import '../scss/custom.scss';
// import '../scss/_fonts.scss';  //when I insert this it puts the fonts but removes the colour

import {
 Nav,
 Navbar,
 Container
} from 'react-bootstrap';

function Nav1(props) {
 return (
  <>
   <Navbar bg="primary" expand="lg" className="navbar">
    <Container fluid>
     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
      <Nav
       className="me-auto my-2 my-lg-0"
       style={{ maxHeight: '100px' }}
       navbarScroll
      >
       <Nav.Link href="#login">Log In</Nav.Link>
       <Nav.Link href="#signup">Sign Up</Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
 );
}

export default Nav1;

//WHen i insert d-flex flex-row into navbar collapse it refuses to collapse