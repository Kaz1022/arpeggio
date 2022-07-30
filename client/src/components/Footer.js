import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';

const Styles = styled.div`
 height: 10vh;
 width: 100%;
 background-color: #BB0DBE;


`;

function Footer() {
 return (
  <Styles>
   <div>ICONS
    <div>icon1</div>
    <div>icon2</div>
    <div>icon3</div>
   </div>
  </Styles>
 );
}

export default Footer;
