import React from 'react';
import styled from 'styled-components';
import '../scss/custom.scss';
//ICONS
import main from '../assets/images/main.jpeg';
import connect from '../assets/images/connect.jpg';
import collaborate from '../assets/images/collaborate.jpg';
import learn from '../assets/images/learn.jpg';
import create from '../assets/images/create.jpg';
//USER IMAGES
import marina from '../assets/images/marina.jpg';
import kaz from '../assets/images/kaz.jpg';
import michaela from '../assets/images/michaela.jpg';


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
 }
 .user1,
 .user2,
 .user3 {
  height: auto;
  width: 30rem;
  padding: 3rem;
  text-align:center;
 }

 .feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
  font-size:1.5rem;
 }
 .description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;
//FEATURE ICONS
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

 //USER ICONS
 const MarinaIcon = styled.img.attrs({
  src: `${marina}`,
 })`
  width: auto;
  height: 100%;
  object-fit: cover;
 }
 `;

 const KazIcon = styled.img.attrs({
  src: `${kaz}`,
 })`
  width: auto;
  height: 100%;
  object-fit: cover;
 }
 `;

 const MichaelaIcon = styled.img.attrs({
  src: `${michaela}`,
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
    <MarinaIcon src="../assets/images/marina.jpg" />
     <div className="feature">MARINA BEKKER</div>
     <div className="description">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis finibus ex, sit amet faucibus ante. Integer vel est sit amet mi pharetra maximus. Integer et augue sagittis, semper dui et, gravida elit. Quisque pellentesque commodo mi, vitae aliquam ante euismod quis. Praesent lobortis dictum urna faucibus ultrices. Vivamus tincidunt mi eget nulla laoreet, a consectetur sapien mollis.
     </div>
    </div>
    <div className="user2">
    <KazIcon src="../assets/images/kaz.jpg" />
     <div className="feature">KAZ BAYNTON</div>
     <div className="description">
     Aenean tempor dui pretium lorem tempor, vitae commodo nulla elementum. Ut semper orci rhoncus odio pellentesque, eu viverra leo tempus. Mauris tempus, mi ac molestie posuere, sem nisl laoreet libero, sit amet viverra orci ipsum at quam. Phasellus quam orci, dignissim sit amet diam eu, rhoncus ornare nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </div>
    </div>
    <div className="user3">
    <MichaelaIcon src="../assets/images/michaela.jpg" />
      <div className="feature">MICHAELA KING</div>
      <div className="description">
      Morbi dapibus nec libero vitae accumsan. Nunc condimentum mattis quam eu tincidunt. Morbi pellentesque dictum mauris in ultrices. Pellentesque dignissim leo in vestibulum convallis. Vestibulum sollicitudin dolor sit amet lobortis tempus. Maecenas quis pulvinar metus, quis viverra dolor. Ut maximus, sem non dictum vulputate, tortor arcu tempor nulla. Nec consectetur libero vitae accumsantst.
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
