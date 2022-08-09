import React, { useState, useEffect } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import '../../scss/custom.scss';
import '../../App.scss';

import drumsA from '../../assets/images/music_icons/Drums/drums_a.png';
import guitarA from '../../assets/images/music_icons/Guitars/guitar_a.png';
import vocalA from '../../assets/images/music_icons/Vocals/vocals_a.png';
import ConfirmationModal from '../Others/ConfirmationModal';
import axios from 'axios';


const DrumImg = styled.img.attrs({
  src: `${drumsA}`,
 })`
   height: 120px;
   max-width: 100%;
   border-radius: 60%;
   margin-right: 30px;
   margin-top: 20px;
   box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
   &:hover{
    box-shadow: 1px 1px 5px 1px pink;
    outline: none;
     }
   }
   `;

const GuitarImg = styled.img.attrs({
  src: `${guitarA}`,
})`
  height: 120px;
  max-width: 100%;
  border-radius: 60%;
  margin-right: 30px;
  margin-top: 20px;
  box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
  &:hover{
  box-shadow: 1px 1px 5px 1px pink;
  outline: none;
   }}`;

   const VocalImg = styled.img.attrs({
    src: `${vocalA}`,
  })`
    height: 120px;
    max-width: 100%;
    border-radius: 60%;
    margin-right: 30px;
    margin-top: 20px;
    box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
    &:hover{
    box-shadow: 1px 1px 5px 1px pink;
    outline: none;
     }}`;

const EventStyles = styled.div`
.card{
  display:flex;
  flex-direction: column;
  align-items:center;
  border: none;  
  padding: 0rem 5rem;
}
.eventCard{
  height: fit-content;
  // max-height: 90vh;
  width: 100%;
  margin: 30px;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify content: space-betweeen;
  align-items:center;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  background-color: #FFFFFF;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.event-name{
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 1.74rem;
}
.top{
  margin:15px 0px;
}

//LEFT
.left{
  position: relative;
  padding: 1em 2em;
  height: 100%;
  flex:1.5;
}
.top{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.heart-icon{
  position: absolute;
  left: 92%;
  bottom: 5%;
}
.event-details{
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
}
.details{
  display:flex;
  justify-content:space-between;
  padding-right: 10rem;
}
.spots-heading{
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
}
.event-description{
  font-size: 1.2rem;
  margin: 30px 0px;
  line-height: 30px;
}
.instrument-icons{
  width: 75%;
  display:flex;
  justify content: space-around;
}

//RIGHT
.right{
  position: relative;
  height: 100%;
  width:100%;
  padding: 0;
  margin: 0;
  flex:1;

  .timeago{
    color:white;
    font-weight: bold;
    position: absolute;
    top:94%;
    left: 40%;
  }
  .main_image{
    max-width: 100%;
    min-height: 50vh;
    // flex-shrink: 0;
    object-fit: cover;
  }
}
`;

const InstrumentStatusComp = {
  Drum: {
    Available: DrumImg,
    Pending: DrumImg,
    Filled: DrumImg,
  },
  Guitar: {
    Available: GuitarImg,
    Pending: GuitarImg,
    Filled: GuitarImg
  },
  Vocal: {
    Available: VocalImg,
    Pending: VocalImg,
    Filled: VocalImg
  }
}

function EventListItem({
 id,
 title,
 user,
 date,
 start,
 end,
 city,
 country,
 level,
 venue,
 genre,
 image,
 description,
 status,
 created,
 instruments,
 instrument_quantity,
 events,
}) {
 const [show, setShow] = useState(false);
 const [statuss, setStatuss] = useState();

 
 const instrumentsArr = [];
 const instrumentSummary = events.map((event) => {
  event.event_instruments.map((event_i) => {
   const instrument_name = event.instruments.find(
    (inst) => inst.id === event_i.instrument_id
   ).name;
   
   const instrument = {
    name: instrument_name,
    event_id: event_i.event_id,
    quantity: event_i.quantity,
    status: event_i.status,
   };
   instrumentsArr.push(instrument);
  });
 });

const getEventData = () => {
  const event = events.find(e => e.id === id);

  const instrumentsById = event.instruments.reduce((acc, val) => {
    acc[val.id] = val
    return acc
  }, {})
  
  return event.event_instruments.map((ei) => {
    const name = instrumentsById[ei.instrument_id].name
    const Comp = InstrumentStatusComp[name][ei.status];
   return [...Array(ei.quantity)].map((v, i) => <Comp key={`selector-${i}`} />)
  })  
}

useEffect(function () {
}, []);  //url id

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleConfirm = () => setStatuss();

 return (
  <EventStyles>
   <div className="card">
    <div className="eventCard">
     <div className="left">
      <div className="top">
       <div className="event-name">{title}</div>
       <div className="event-organiser">
        <strong>By:&nbsp;&nbsp;</strong>
        {user}
       </div>
       <div className="heart-icon">
        <BsHeartFill
         style={{ color: 'whitesmoke', fontSize: '1.6rem' }}
         onMouseOver={({ target }) => (target.style.color = 'rgb(244, 56, 56)')}
         onMouseOut={({ target }) =>
          (target.style.color = 'rgba(244, 56, 56,0.2)')
         }
        />
       </div>
      </div>

      <div className="event-details">
       <div className="event-date">
        <strong>Date:&nbsp;&nbsp;</strong>
        {date}
       </div>
       <div className="details">
        <div className="details1">
         <div className="event-location">
          <strong>Location:&nbsp;&nbsp;</strong>
          {city}, {country}
         </div>
         <div className="event-level">
          <strong>Level:&nbsp;&nbsp;</strong> {level}
         </div>
        </div>
        <div className="details2">
         <div className="event-venue">
          <strong>Venue:&nbsp;&nbsp;</strong>
          {venue}
         </div>
         <div className="genre">
          <strong>Genre:&nbsp;&nbsp;</strong>
          {genre}
         </div>
        </div>
       </div>
      </div>

      <div className="event-description">{description}</div>

      <div className="spots">
       <div className="spots-heading">AVAILABLE SPOTS</div>
       <ConfirmationModal show={show} onHide={handleClose} onConfirm={handleConfirm}/>
       <div className="instrument-icons">
        <div className="icons" onClick={handleShow}>{getEventData()}</div>
       </div>
      </div>
     </div>

     <div className="right">
      <img className="main_image" src={image} alt="" />
      <TimeAgo className="timeago" date={created}></TimeAgo>
     </div>
    </div>
   </div>
  </EventStyles>
 );
}

export default EventListItem;