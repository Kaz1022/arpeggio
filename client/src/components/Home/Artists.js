import React from 'react';
import styled from 'styled-components';
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
  </ArtistsContainer>
  </>
 );
}

export default Artists;

