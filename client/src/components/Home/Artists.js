import React from 'react';
import '../../scss/custom.scss';

//USER IMAGES
import { MarinaIcon, KazIcon, MichaelaIcon } from '../styled-component/icons-styled';
import {ArtistsContainer} from '../styled-component/mainStyles'

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
      Our little band plays with React with a backing of Ruby on Rails to create melodies everyone can enjoy! 
      Arpeggio is meant to bring people together of all skill levels so we can create and enjoy. 
      </div>
     </div>
     <div className="user2">
      <KazIcon src="../assets/images/kaz.jpg" />
      <div className="feature">KAZ BAYNTON</div>
      <div className="description">
       Through Apreggio, I found my tribe! Before meeting my band members, I was just starting to learn Rails melody and did not know much about playing React and Rails together. Apreggio gave me an opportunity to learn and push myself with new instruments, such as React Bootstrap, Twilio, and Rails Active Storage, to create something from scratch. 
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
  </ArtistsContainer>
  </>
 );
}

export default Artists;

