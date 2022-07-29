import React from 'react';
import '../scss/custom.scss';
// import '../scss/_fonts.scss';  //when I insert this it puts the fonts but removes the colour

import {
 Nav,
 Navbar,
 Container,
 Button
} from 'react-bootstrap';

function Nav1(props) {
 return (
  <>
   <Navbar bg="light" expand="lg">
    <Container fluid>
     <Navbar.Brand href="#">ARPEGGIO</Navbar.Brand>
     {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
     <Navbar id="navbarScroll" className='d-flex justify-content-end'>
      <Nav
       className="me-auto my-1 my-lg-0"
       style={{ maxHeight: '100px' }}
       navbarScroll
      >
       <Button variant="primary" href="#login" className="m-1">Log In</Button>
       <Button variant="dark"href="#signup" className="m-1">Sign Up</Button>
      </Nav>
     </Navbar>
    </Container>
   </Navbar>
  </>
 );
}

export default Nav1;

//WHen i insert d-flex flex-row into navbar collapse it refuses to collapse