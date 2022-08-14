import React from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';

//USER IMAGES
import marina from '../../assets/images/marina.jpg';
import kaz from '../../assets/images/kaz.jpg';
import michaela from '../../assets/images/michaela.jpg';


const Container = styled.div`
 position: relative;
 height: auto;
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
  height: 45vh;
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
  height: 100%;
  display:flex;
  align-items: center;
  // border: 3px solid blue;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;

//USER ICONS
const MarinaIcon = styled.img.attrs({
 src: `${marina}`,
})`
  width: auto;
  height: 120px
  object-fit: cover;
 }
 `;

const KazIcon = styled.img.attrs({
 src: `${kaz}`,
})`
  width: auto;
  height: 120px;
  object-fit: cover;
 }
 `;

const MichaelaIcon = styled.img.attrs({
 src: `${michaela}`,
})`
  width: auto;
  height: 120px;
  object-fit: cover;
 }
 `;

function Artists() {
 return (
  <>
  <Container>
   <section className="artists">
    <h4>FEATURED ARTISTS</h4>
    <div className="users-container">
     <div className="user1">
      <MarinaIcon src="../assets/images/marina.jpg" />
      <div className="feature">MARINA BEKKER</div>
      <div className="description">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
       finibus ex, sit amet faucibus ante. Integer vel est sit amet mi pharetra
       maximus. Integer et augue sagittis, semper dui et, gravida elit. Quisque
       pellentesque commodo mi, vitae aliquam ante euismod quis. Praesent
       lobortis dictum urna faucibus ultrices. Vivamus tincidunt mi eget nulla
       laoreet, a consectetur sapien mollis.
      </div>
     </div>
     <div className="user2">
      <KazIcon src="../assets/images/kaz.jpg" />
      <div className="feature">KAZ BAYNTON</div>
      <div className="description">
       Aenean tempor dui pretium lorem tempor, vitae commodo nulla elementum. Ut
       semper orci rhoncus odio pellentesque, eu viverra leo tempus. Mauris
       tempus, mi ac molestie posuere, sem nisl laoreet libero, sit amet viverra
       orci ipsum at quam. Phasellus quam orci, dignissim sit amet diam eu,
       rhoncus ornare nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
       elit.
      </div>
     </div>
     <div className="user3">
      <MichaelaIcon src="../assets/images/michaela.jpg" />
      <div className="feature">MICHAELA KING</div>
      <div className="description">
       Without Arpeggio, our band wouldnt exist! 
       At the last minute our lead singer bailed, and as a new band,
       we had no way of figuring out who could perform with us on short notice.
       Since then, we've gone from amateur players in my garage, to performing
       at small events all over Ontario, all thanks to Arpeggio!
      </div>
     </div>
    </div>
   </section>
  </Container>
  </>
 );
}

export default Artists;

