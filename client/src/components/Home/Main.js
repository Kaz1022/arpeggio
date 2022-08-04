import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../scss/custom.scss';
import Features from './Features';
//ICONS
import main from '../../assets/images/main.jpeg';
import Artists from './Artists';

const Img = styled.img.attrs({
 src: `${main}`,
})`
 width: 100vw;
 height: 100%;
 object-fit: cover;
 object-position: top;
 opacity: 0.92;
}
`;

const Container = styled.div`
 position: relative;
 height: 75vh;
 width: 100%;

 p,
 button {
  position: absolute;
  color: white;
  font-family: 'Oswald', sans-serif;
 }

 p {
  font-size: 2.3rem;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
 }

 button {
  font-size: 1.3rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 3px;
  padding: 8px 18px;
  background: none;
  &:hover {
   background: #bb0dbe;
   color: #e2ef70;
   border: 1px solid #e2ef70;
  }
 }

 .features,
 .artists {
  padding: 30px;
  height: min-content;
 }

 .features,
 .users-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  line-height: 30px;
 }

 .features {
  background-color: #e2ef70;
 }

 .artists {
  background-color: #ffe7ff;
 }

 h4{
  text-align:center;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight:bold;
 }

 .connect,
 .collaborate,
 .learn,
 .create,
 .user1,
 .user2,
 .user3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 23px 10px 23px 10px;
  border-radius: 10px;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
 }
 .connect,
 .collaborate,
 .learn,
 .create {
  height: auto;
  width: 21rem;
 }
 .user1,
 .user2,
 .user3 {
  height: auto;
  width: 30rem;
  padding: 3rem;
  text-align: center;
 }

 .feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
  font-size: 1.5rem;
 }
 .description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;

function Main() {

  return (
    <>
    <Container>
    <Img src="../assets/images/main.jpeg" />
    <section className="head">
      <p>FIND A MUSICIAN IN YOUR AREA</p>
      <Link to="/events"><button className="m-1">BROWSE EVENTS</button></Link>
    </section>
    </Container>
    <Features/>
    <Artists/>
    </>
  );
}

export default Main;
