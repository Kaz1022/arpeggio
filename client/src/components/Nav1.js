import React from 'react';
import '../scss/custom.scss';
import {Nav, Navbar, NavDropdown, Form, Container, Button} from 'react-bootstrap'

function Nav1(props) {
 return (
  <>
   <Navbar bg="light" expand="lg" className='navbar'>
    <Container fluid>
     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
     <Nav.Link href="#action1">Home</Nav.Link>
       <Nav.Link href="#action2">Link</Nav.Link>
       <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
       </NavDropdown>
       <Nav.Link href="#" disabled>
        Link
       </Nav.Link>
      <Form className="d-flex">
       <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
       />
       <Button variant="outline-success">Search</Button>
      </Form>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
 );
}

export default Nav1;
