import React from 'react';
import { Link } from 'react-router-dom';

import {MainContainer} from '../styled-component/mainStyles'
import {MainImg} from '../styled-component/icons-styled'
import '../../scss/custom.scss';
import Features from './Features';
import Artists from './Artists';

function Main() {

  return (
    <>
    <MainContainer>
    <MainImg src="../assets/images/main.jpeg" />
    <section className="head">
      <p>FIND A MUSICIAN IN YOUR AREA</p>
      <Link to="/events"><button className="m-1">BROWSE EVENTS</button></Link>
    </section>
    </MainContainer>
    <Features/>
    <Artists/>
    </>
  );
}

export default Main;
