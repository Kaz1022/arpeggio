import React, { useState, useEffect } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import ConfirmationModal from '../Modals/ConfirmationModal';
import NotAvailableModal from '../Modals/NotAvailableModal';
import MesssageSentModal from '../Modals/MessageSentModal';
import axios from 'axios';

import {
  DrumImgA,DrumImgP,DrumImgF,
  GuitarImgA, GuitarImgP,GuitarImgF,
  VocalImgA, VocalImgP,VocalImgF
 } from '../styled-component/instrumenticons-styled';
import '../../scss/custom.scss';
import '../../App.scss';
import { EventStyles } from '../styled-component/mySessionListItem-styled';


const InstrumentStatusComp = {
 Drum: {
  Available: DrumImgA,
  Pending: DrumImgP,
  Filled: DrumImgP,
 },
 Guitar: {
  Available: GuitarImgA,
  Pending: GuitarImgP,
  Filled: GuitarImgP,
 },
 Vocal: {
  Available: VocalImgA,
  Pending: VocalImgP,
  Filled: VocalImgP,
 },
};

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

  const instrumentsArr = [];

  const instrumentSummary = events.map((event) => {
    event.event_instruments.map((event_i) => {
       //This is the status objects
      
      const instrument_name = event.instruments.find(
        (inst) => inst.id === event_i.instrument_id
      ).name;
      
      const instrument = {
        name: instrument_name,
        event_id: event_i.event_id,
        status: event_i.status.reduce((acc, curr, i) => {
            acc[curr.name] = curr.quantity;
            return acc;
        }, {})
      };

      instrumentsArr.push(instrument);
    });
  });

  // console.log(instrumentsArr)

 const getEventData = () => {
  const event = events.find((e) => e.id === id);                             //find event where the event id is equal to id -> here e is each event object

  const instrumentsById = event.instruments.reduce((acc, val) => {
    acc[val.id] = val;
    return acc;
   }, {});
 
   return event.event_instruments.map((ei) => {
      const name = instrumentsById[ei.instrument_id].name;
      const instrumentsAry = [];
      ei.status.forEach((item) => {
        const Comp = InstrumentStatusComp[name][item.name];
        [...Array(item.quantity)].forEach((v, i) => {
          instrumentsAry.push( <Comp key={`selector-${i}`} />)
        })
      });
      return instrumentsAry
   });

 };

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 //  useEffect(function () {
 const handleConfirm = (e) => {
  e.preventDefault();
  console.log('confirmation button clicked submitted');
  // console.log(status[0][1].name)  //status[0] is the array of quantities and status[0][0] is the first number in the array which corresponds to 'Available'
  // if (status[0][0].name === 'Available' &&  status[0][0].quantitiy > 0) {  //if available quantity is more than 0
  //  console.log('confirmation request submitted');
  //    axios
  //     .put(
  //      `/api/event_instruments/${id}`,  //THIS SHOULD GIVE USER_ID & CHANGE ATTENDEE WHEN ACCEPTED
  //      {
  //       status: 'Available',
  //      },
  //      {
  //       headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //      }
  //     )
  //     .then((response) => {
  //      console.log(response);
  //      console.log(response.data);
  //      if (response.data.status === 'updated') {
  //       console.log('event update is successful. response data:', response.data);
  //       // updateEvent(status, response.data)  //send status down from EventFilter?
  //       setStatuss(status[[0]]); //the status caused to occur by clicking confirm application button
  //       console.log('after Update Run data >>>>>>>>>', response);
  //handleClose();
  // <MessageSentModal show={show} onHide={handleClose} />
  //      }
  //     })
  //     .catch((error) => {
  //      console.log('event update error', error);
  //     });
  //   } else {
  //  <NotAvailableModal show={show} onHide={handleClose} />
  // }
 };
 //  }, []);  //url id

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
       <ConfirmationModal
        show={show}
        onHide={handleClose}
        onConfirm={handleConfirm}
       />
       <div className="instrument-icons">
        <div className="icons" onClick={handleShow}>
         {getEventData()}
        </div>
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
