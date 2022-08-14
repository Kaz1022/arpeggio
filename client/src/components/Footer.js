import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';
import {FooterStyles} from '../components/styled-component/mainStyles'


function Footer() {
 return (
  <FooterStyles>
   <div className="footer-container">
    <div className="x">&copy; 2022 KBB Productions</div>
   </div>
  </FooterStyles>
 );
}

export default Footer;
