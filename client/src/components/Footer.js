import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';

const Styles = styled.div`
zIndex:1;
 height: 500px;
 background-color: pink;
`;

function Footer() {
 return (
  <Styles>
   <div>FOOTER</div>
  </Styles>
 );
}

export default Footer;
