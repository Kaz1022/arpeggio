import React from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
//ICONS
import { ConnectIcon, CollaborateIcon, LearnIcon,CreateIcon } from '../styled-component/icons-styled';
import {FeaturesContainer} from '../styled-component/mainStyles'

function Features() {
 return (
  <>
  <FeaturesContainer>
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
  </FeaturesContainer>
  </>
 );
}

export default Features;

