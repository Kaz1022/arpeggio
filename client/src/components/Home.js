import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';
import main from '../assets/images/main.jpeg';

const Img = styled.img.attrs({
 src: `${main}`,
})`
 width: 100vw;
 height: 100%;
 object-fit: cover;
 object-position: top;
 background: linear-gradient(45deg, pink, pink, hotpink);
`;
//this linear gradient doesnt work, working on it

const Container = styled.div`
 position: relative;
 height: 75vh;
 width: 100%;

 .head{
 }

 p,
 button {
  position: absolute;
  color: white;
  font-family: var(--bs-font-sans-serif);
}

p {
  font-size: 2.3rem;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
 }

 button {
  font-size: 1.3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 3px;
  padding: 8px 18px;
  background:none;
 }

 .features {
  padding-top:30px;
  height: 200px;
  background-color: #E2EF70;
  display: flex;
 }
`;

function Home() {
 return (
  <Container>
   <Img src="../assets/images/main.jpeg" />
   <section className="head">
    <p>FIND A MUSICIAN IN YOUR AREA</p>
    <button>BROWSE EVENTS</button>
   </section>
   <section className="features">
    <div className="connect">
     <div className="icon">ICON</div>
     <div className="feature">CONNECT</div>
     <div className="description">Grow your network of Artists</div>
    </div>
    <div className="collaborate">
     <div className="icon">ICON</div>
     <div className="feature">COLLABORATE</div>
     <div className="description">Jam with amazing People</div>
    </div>
    <div className="learn">
     <div className="icon">ICON</div>
     <div className="feature">LEARN</div>
     <div className="description">Pick up a thing or two</div>
    </div>
    <div className="create">
     <div className="icon">ICON</div>
     <div className="feature">CREATE</div>
     <div className="description">Make new sounds</div>
    </div>
   </section>
  </Container>
 );
}

export default Home;

// background-position:fixed;
// background-size: cover;
// background-repeat: no-repeat;
// background-image: url(${main});
// overflow:hidden;
