import styled from 'styled-components';

export const NavStyles2 = styled.div`
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