import { React } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import '../scss/custom.scss';
import styled from 'styled-components';


const Styles2 = styled.div`
  .navbar {
    background-color: rgba(187, 13, 190, 0.8);
    padding: 0.4em 2em;
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
    margin: 0em ;
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

function NavigationAfterLogin(props) {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    axios.delete("/api/logout", { withCredentials: true })
        .then(response => {
            props.handleLogout();
            navigate('/');
        }).catch(error => console.log("Logout Error >>> ", error))
  }

  // const handleMyProfileClick = () => {
  //   axios.get(`/api/users/${props.currentUser.id}/instruments`)
  //     .then(response => {
  //       console.log("My Profile Clicked:response>>>", response.data)
  //       props.getInstruments(response.data);
  //       navigate('/myprofile');
  //     }).catch(error => console.log("Connecting API Error >>> ", error))
  // }


  return (
    <Styles2>
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
              <NavDropdown.Item as={Link} to="/events">FIND A SESSION</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogoutClick}>
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

export default NavigationAfterLogin;