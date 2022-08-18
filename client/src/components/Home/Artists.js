import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from '../styled-component/icons-styled';
import '../../scss/custom.scss';

//USER IMAGES
import {
 MarinaIcon,
 KazIcon,
 MichaelaIcon,
} from '../styled-component/icons-styled';
import { ArtistsContainer } from '../styled-component/mainStyles';

function Artists() {
 return (
  <>
   <ArtistsContainer>
    <section className="artists">
     <h4>FEATURED ARTISTS</h4>
     <div className="users-container">
      <div className="user1">
       <MarinaIcon src="../assets/images/marina.jpg" />
       <div className="feature">MARINA BEKKER</div>
       <div className="description">
        Our little band plays with React with a backing of Ruby on Rails to
        create melodies everyone can enjoy! Arpeggio is meant to bring people
        together of all skill levels so we can create and enjoy. While Rails is intuitive in itself, making it work in harmony with a different FE framework and language was a real challenge. 
       </div>
       <div className="social-icons">
        <a href="https://github.com/Mari-bekker">
         <Github />
        </a>
        <a href="https://www.linkedin.com/in/marina-bekker-53229878/">
         <Linkedin />
        </a>
       </div>
      </div>
      <div className="user2">
       <KazIcon src="../assets/images/kaz.jpg" />
       <div className="feature">KAZ BAYNTON</div>
       <div className="description">
        Through Apreggio, I found my tribe! Before meeting my band members, I
        was just starting to learn Rails melody and did not know much about
        playing React and Rails together. Apreggio gave me an opportunity to
        learn and push myself with new instruments, such as React Bootstrap,
        Twilio, and Rails Active Storage, to create something from scratch.
       </div>
       <div className="social-icons">
        <a href="https://github.com/Kaz1022">
         <Github />
        </a>
        <a href="https://www.linkedin.com/in/kazbaynton/">
         <Linkedin />
        </a>
       </div>
      </div>
      <div className="user3">
       <MichaelaIcon src="../assets/images/michaela.jpg" />
       <div className="feature">MICHAELA KING</div>
       <div className="description">
        Arpeggio is awesome because I can jam with people anywhere! Since using
        it i’ve made so many new friends and met so many professional musicians.
        You can use it just to hang out but you can learn so much too! I used to
        really love HTML Rock with lots of SASS Guitar, but Arpeggio really
        opened my eyes to Classical React with the Rails melody.
       </div>
       <div className="social-icons">
        <a href="https://github.com/Michaela-K">
         <Github />
        </a>
        <a href="https://www.linkedin.com/in/michaelaking20/">
         <Linkedin />
        </a>
       </div>
      </div>
     </div>
    </section>
   </ArtistsContainer>
  </>
 );
}

export default Artists;
