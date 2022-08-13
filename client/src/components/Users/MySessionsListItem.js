import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../../scss/custom.scss';
import '../../App.scss';
import { DrumImgA, DrumImgP, DrumImgF, GuitarImgA, GuitarImgP, GuitarImgF, VocalImgA, VocalImgP,VocalImgF } from '../styled-component/instrumenticons-styled';
import { Img, EventStyles } from '../styled-component/mySessionListItem-styled';
import AcceptanceModal from '../Modals/AcceptanceModal';
import AcceptedModal from '../Modals/AcceptedModal';
import NotAvailableModal from '../Modals/NotAvailableModal';

import axios from 'axios';
import AttendeeList from './AttendeeList';

const InstrumentStatusComp = {
 Drum: {
  Available: DrumImgA,
  Pending: DrumImgP,
  Filled: DrumImgF,
 },
 Guitar: {
  Available: GuitarImgA,
  Pending: GuitarImgP,
  Filled: GuitarImgF,
 },
 Vocal: {
  Available: VocalImgA,
  Pending: VocalImgP,
  Filled: VocalImgF,
 },
};

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
  const [showMsg, setShowMsg] = useState(false);
  const [showNAvail, setShowNAvail] = useState(false);
  const [instrStatus, setInstrStatus] = useState();
  const [pendingEventInstrument, setPendingEventInstrument] = useState();
 
  const handleShow = (eventInstrumentId) => {
   setPendingEventInstrument(eventInstrumentId)
   axios
   .get(`/api/event_instruments/${eventInstrumentId}`)
   .then((res) => console.log(res.data))
   .catch((err) => console.log(err));

     setShow(true)
  }
  const handleClose = () => {
   setPendingEventInstrument(undefined)
   setShow(false);
  }
 
  const handleCloseMsg = () => setShowMsg(false)
  const handleOpenMsg = () => setShowMsg(true)
 
  const handleCloseNA = () => setShowNAvail(false)
  const handleOpenNA = () => setShowNAvail(true)
 
 
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
     event_instruments_id: event_i.id,
     status: event_i.status.reduce((acc, curr, i) => {
      acc[curr.name] = curr.quantity;
      return acc;
     }, {}),
    };
 
    instrumentsArr.push(instrument);
   });
  });
 
 //  console.log(instrumentsArr)
 
  const getEventData = () => {
   const event = events.find((e) => e.id === id);
  //  console.log(event)
 
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
      instrumentsAry.push( 
        <div 
          key={`selector-${i}`} 
          onClick={() => {handleShow(ei.id)} 
          } >
          <Comp />
        </div>);
     });
    });
    return instrumentsAry;
   });
 };

 useEffect(function () {
   axios
    .get(`/api/event_instruments/${id}`)  //if i click on the first event it will setInstr to entire first object
    .then((res) => setInstrStatus(res.data))
    .catch((err) => console.log(err));
  }, []);
   
 //  console.log(instrStatus)
  const handleConfirm = (eventInstrumentId) => {
   // handleClose();
   // console.log('confirmation button clicked submitted');
   // const status = instrumentsArr.map((x) => x.status); //create attendees table(accepted:false, user_id: 1, event_instruments_id: 1)
 
   // instrumentsArr.map((x, i) => {
   //  if (x.event_id === id && status[i]['Available'] > 0) {
   //   console.log("event_id",x.event_id)
   //   console.log("quantity", status[i]['Available'])
   //   console.log("event instr id from instrumentsArr", x.event_instruments_id)
   //   if(event_instruments_id.includes(x.event_instruments_id)){
   //     console.log(x.event_instruments_id)
   //   console.log('confirmation request submitted');
     axios
      .put(
       `/api/event_instruments/${eventInstrumentId}`,  //THIS SHOULD GIVE USER_ID & CREATE ATTENDEE TABLE with accepted: false, WHen Org respomd with confirm then change to true
       {
        status: [
         {
          name: 'Available',
          quantity: 0,
         },
         {
          name: 'Pending',
          quantity: 0,
         },
         {
          name: 'Filled',
          quantity: 1,
         },
        ],
       },
       {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
       }
      )
      .then((response) => {
       console.log('PUT response >>>', response);
       if (response.data.status === 'updated') {
         //do other axios requests?
         // setInstrStatus(response.data)
         setTimeout(function() {
         handleOpenMsg()
       }, 1500);
        console.log(
         'event update is successful. response data >>',
         response.data
         );
         //How do i re render the browser to see the chnages immediately
        //DO I need to save this response to state
       }
     })
     .catch((error) => {
         console.log('event update error', error);
     });
   //   }
   //   else{
   //     setTimeout(function() {
   //       handleOpenNA()
   //     }, 3000);
   //   }
   //  }
   // })
 }
 

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
       <AttendeeList eventsData={events} id={id}/>
        <AcceptanceModal
          eventInstrumentId={pendingEventInstrument}
          show={show}
          onHide={handleClose}
          onConfirm={handleConfirm}
        />
        {/* <AttendeeList eventsData={events} id={id}/> */}
        <AcceptedModal 
          show={showMsg}
          onHide={handleCloseMsg}
          onClose={handleOpenMsg}
          />
        <NotAvailableModal 
        show={showNAvail}
        onHide={handleCloseNA}
        onClose={handleOpenNA}
        />
       <div className="instrument-icons">
        <div className="icons">
         {getEventData()}
        </div>
       </div>
      </div>
     </div>

     <div className="right">
      <div>
       <Img src={image} />
      </div>
      <div className="edit-button">
       <Button variant="dark">EDIT</Button>
      </div>
     </div>
    </div>
   </div>
  </EventStyles>
 );
}

export default MySessionsListItem;
