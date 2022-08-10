import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../../scss/custom.scss';
import '../../App.scss';
import { DrumImg, GuitarImg, VocalImg } from '../styled-component/instrumenticons-styled'; 
import { Img, EventStyles } from '../styled-component/mySessionListItem-styled';
import AcceptanceModal from '../Modals/AcceptanceModal';

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

function MySessionsListItem({
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
 events,
}) {
 const [show, setShow] = useState(false);
 const [statuss, setStatuss] = useState();

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
  // setIconData(newObjArr)
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
       <AcceptanceModal show={show} onHide={handleClose} onConfirm={handleConfirm}/>
       <div className="instrument-icons">
        <div className="icons" onClick={handleShow}>
          {getEventData()}
        </div>
       </div>
      </div>
     </div>

     <div className="right">
      <div>
        <Img src={image} />
      </div>
      <div  className="edit-button">
        <Button variant="dark">EDIT</Button>
      </div>
     </div>
    </div>
   </div>
  </EventStyles>
 );
}

export default MySessionsListItem;