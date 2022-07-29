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

 .head {
 }

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
 }

 .features,
 .artists {
  padding: 30px;
  height: min-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
 }

 .features {
  background-color: #e2ef70;
 }

 .artists {
  background-color: #ffe7ff;
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
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
 }
 .connect,
 .collaborate,
 .learn,
 .create {
  height: 10rem;
  width: 25rem;
 }
 .user1,
 .user2,
 .user3 {
  height: 10rem;
  width: 35rem;
 }

 .feature {
  margin: 5px;
  font-family: 'Oswald', sans-serif;
 }
 .description {
  font-family: 'Roboto', sans-serif;
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
   <section className="artists">
    <div className="user1">
     <div className="icon">USER ICON</div>
     <div className="feature">MARINA BEKKER</div>
     <div className="description">
      Before Arpeggio, It was so difficult to find someone to .......Lorem Ipsum
     </div>
    </div>
    <div className="user2">
     <div className="icon">USER ICON</div>
     <div className="feature">MARINA BEKKER</div>
     <div className="description">
      Before Arpeggio, It was so difficult to find someone to .......Lorem Ipsum
     </div>
    </div>
    <div className="user3">
     <div className="icon">USER ICON</div>
     <div className="feature">MARINA BEKKER</div>
     <div className="description">
      Before Arpeggio, It was so difficult to find someone to .......Lorem Ipsum
     </div>
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
