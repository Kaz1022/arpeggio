import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';
import main from '../assets/images/main.jpeg';
import connect from '../assets/images/connect.jpg';
import collaborate from '../assets/images/collaborate.jpg';
import learn from '../assets/images/learn.jpg';
import create from '../assets/images/create.jpg';


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
  font-size: 1.5rem;
 }
 .user1,
 .user2,
 .user3 {
  height: 10rem;
  width: 35rem;
 }

 .feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
 }
 .description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;

const ConnectIcon = styled.img.attrs({
 src: `${connect}`,
})`
 width: auto;
 height: 100%;
 object-fit: cover;
}
`;

const CollaborateIcon = styled.img.attrs({
  src: `${collaborate}`,
 })`
  width: auto;
  height: 100%;
  object-fit: cover;
 }
 `;

 const LearnIcon = styled.img.attrs({
  src: `${learn}`,
 })`
  width: 14.8%;
  height: auto;
  object-fit: cover;
 }
 `;

 const CreateIcon = styled.img.attrs({
  src: `${create}`,
 })`
  width: auto;
  height: 100%;
  object-fit: cover;
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
     <ConnectIcon src="../assets/images/connect.jpg" />
     <div className="feature">CONNECT</div>
     <div className="description">Grow your network of Artists</div>
    </div>
    <div className="collaborate">
     <CollaborateIcon src="../assets/images/collaborate.jpg" />
     <div className="feature">COLLABORATE</div>
     <div className="description">Jam with amazing People</div>
    </div>
    <div className="learn">
     <LearnIcon src="../assets/images/learn.jpg" />
     <div className="feature">LEARN</div>
     <div className="description">Pick up a thing or two</div>
    </div>
    <div className="create">
     <CreateIcon src="../assets/images/create.jpg" />
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
