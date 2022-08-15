import { React } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import '../scss/custom.scss';
import {NavStyles2} from '../components/styled-component/navStyles-styled'

function NavigationAfterLogin(props) {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    axios.delete("/api/logout", { withCredentials: true })
        .then(response => {
            props.handleLogout();
            navigate('/');
        }).catch(error => console.log("Logout Error >>> ", error))
  }

  return (
    <NavStyles2>
      <Navbar expand="lg">
        <Container fluid>
        <Navbar.Brand  as={Link} to="/">ARPEGGIO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link as={Link} to="/favourites">MY FAVOURITES</Nav.Link></Nav.Item>
            <NavDropdown title={<span>Hello, {props.currentUser.first_name}!</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/myprofile">MY PROFILE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/session/new">CREATE A SESSION</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mysessions">MY SESSIONS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">BROWSE SESSIONS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogoutClick}>
                LOGOUT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles2>
  );
}

export default NavigationAfterLogin;