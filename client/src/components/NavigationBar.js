import React from 'react';
import {Nav,Navbar,Button,Container} from 'react-bootstrap';
import '../scss/custom.scss';
// import '../scss/_fonts.scss';  //when I insert this it puts the fonts but removes the colour
import {NavStyles1} from '../components/styled-component/navStyles-styled'

function NavigationBar() {
 return (
  <NavStyles1>
   <Navbar bg="light" expand="lg">
    <Container fluid>
     <Navbar.Brand href="/">ARPEGGIO</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse className="justify-content-end">
      <Nav>
       <Button variant="primary" href="login" className="m-1">LOG IN</Button>
       <Button variant="dark" href="signup" className="m-1">SIGN UP</Button>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </NavStyles1>
 );
}

export default NavigationBar;