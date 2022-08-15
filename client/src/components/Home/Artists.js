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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        finibus ex, sit amet faucibus ante. Integer vel est sit amet mi pharetra
        maximus. Integer et augue sagittis, semper dui et, gravida elit. Quisque
        pellentesque commodo mi, vitae aliquam ante euismod quis. Praesent
        lobortis dictum urna faucibus ultrices. Vivamus tincidunt mi eget nulla
        laoreet, a consectetur sapien mollis.
       </div>
       <div className='social-icons'>
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
        Aenean tempor dui pretium lorem tempor, vitae commodo nulla elementum.
        Ut semper orci rhoncus odio pellentesque, eu viverra leo tempus. Mauris
        tempus, mi ac molestie posuere, sem nisl laoreet libero, sit amet
        viverra orci ipsum at quam. Phasellus quam orci, dignissim sit amet diam
        eu, rhoncus ornare nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
       </div>
       <div className='social-icons'>
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
       <div className='social-icons'>
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
