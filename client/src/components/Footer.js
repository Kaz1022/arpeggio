import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';

const Styles = styled.div`
 height: 10vh;
 width: 100%;
 background-color: #bb0dbe;
 display:flex;
 align-items: center;

 .footer-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 58px 20px 58px;
  color: white;
 }
`;

function Footer() {
 return (
  <Styles>
   <div className="footer-container">
    <div className="x">&copy; 2022 KBB Productions</div>
   </div>
  </Styles>
 );
}

export default Footer;
