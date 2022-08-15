import styled from 'styled-components';

import main from '../../assets/images/main.jpeg';

import drumsA from '../../assets/images/music_icons/Drums/drums_a.png';
import drumsP from '../../assets/images/music_icons/Drums/drums_p.png';
import drumsF from '../../assets/images/music_icons/Drums/drums_f.png';
import guitarA from '../../assets/images/music_icons/Guitars/guitar_a.png';
import guitarP from '../../assets/images/music_icons/Guitars/guitar_p.png';
import guitarF from '../../assets/images/music_icons/Guitars/guitar_f.png';
import vocalA from '../../assets/images/music_icons/Vocals/vocals_a.png';
import vocalP from '../../assets/images/music_icons/Vocals/vocals_p.png';
import vocalF from '../../assets/images/music_icons/Vocals/vocals_f.png';

import marina from '../../assets/images/marina.jpg';
import kaz from '../../assets/images/kaz.jpg';
import michaela from '../../assets/images/michaela.jpg';

import connect from '../../assets/images/connect.jpg';
import collaborate from '../../assets/images/collaborate.jpg';
import learn from '../../assets/images/learn.jpg';
import create from '../../assets/images/create.jpg';


//MAIN PAGE
export const MainImg = styled.img.attrs({
  src: `${main}`,
 })`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: top;
  opacity: 0.92;
 }
 `;

//INSTRUMENT ICONS
export const DrumImgA = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={drumsA} alt="" />
  </div>
 );
};
export const DrumImgP = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={drumsP} alt="" />
  </div>
 );
};
export const DrumImgF = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={drumsF} alt="" />
  </div>
 );
};
export const GuitarImgA = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={guitarA} alt="" />
  </div>
 );
};

export const GuitarImgP = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={guitarP} alt="" />
  </div>
 );
};
export const GuitarImgF = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={guitarF} alt="" />
  </div>
 );
};
export const VocalImgA = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={vocalA} alt="" />
  </div>
 );
};

export const VocalImgP = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={vocalP} alt="" />
  </div>
 );
};
export const VocalImgF = () => {
 return (
  <div className="icon-container">
   <img className="instr-icon" src={vocalF} alt="" />
  </div>
 );
};


//USER ICONS
export const MarinaIcon = styled.img.attrs({
 src: `${marina}`,
})`
  width: auto;
  height: 120px
  object-fit: cover;
 }
 `;

 export const KazIcon = styled.img.attrs({
 src: `${kaz}`,
})`
  width: auto;
  height: 120px;
  object-fit: cover;
 }
 `;

 export const MichaelaIcon = styled.img.attrs({
 src: `${michaela}`,
})`
  width: auto;
  height: 120px;
  object-fit: cover;
 }
 `;


 //FEATURE ICONS
 export const ConnectIcon = styled.img.attrs({
  src: `${connect}`,
 })`
  width: auto;
  height: 100%;
  object-fit: cover;
 }
 `;
 
 export const CollaborateIcon = styled.img.attrs({
  src: `${collaborate}`,
 })`
   width: auto;
   height: 100%;
   object-fit: cover;
  }
  `;
 
  export const LearnIcon = styled.img.attrs({
  src: `${learn}`,
 })`
   width: 14.8%;
   height: auto;
   object-fit: cover;
  }
  `;
 
  export const CreateIcon = styled.img.attrs({
  src: `${create}`,
 })`
   width: auto;
   height: 100%;
   object-fit: cover;
  }
  `;

  //APPLICANT STYLE
  export const ApplicantImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
 `;