import React, { useState, useEffect } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import ConfirmationModal from '../Modals/ConfirmationModal';
import NotAvailableModal from '../Modals/NotAvailableModal';
import MesssageSentModal from '../Modals/MessageSentModal';
import axios from 'axios';

import {
 DrumImgA,
 DrumImgP,
 DrumImgF,
 GuitarImgA,
 GuitarImgP,
 GuitarImgF,
 VocalImgA,
 VocalImgP,
 VocalImgF,
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
 userPhone,
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
 const [showMsg, setShowMsg] = useState(false);
 const [showNAvail, setShowNAvail] = useState(false);
 const [instrStatus, setInstrStatus] = useState({});

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleCloseMsg = () => setShowMsg(false)
 const handleOpenMsg = () => setShowMsg(true)

 const handleCloseNA = () => setShowNAvail(false)
 const handleOpenNA = () => setShowNAvail(true)

//  const [statuss, setStatuss] = useState();
 const [like, setLike] = useState(false);

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
    }, {}),
   };

   instrumentsArr.push(instrument);
  });
 });

 // console.log(instrumentsArr)

 const getEventData = () => {
  const event = events.find((e) => e.id === id);

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
     instrumentsAry.push(<Comp key={`selector-${i}`} />);
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
 
 const currentUser = JSON.parse(localStorage.getItem("user"));
 
 const handleLike = (e) => {
  e.preventDefault();
  const myfavourite = {event_id: id, user_id: currentUser.userData.id}
  setLike((prevLike)=> !prevLike);
  if (!like) {
    axios.post("/api/user_favourites",
      {myfavourite})
      .then(response => {
        console.log("axios call response>>>>>", response);
          // need to change the icon to red!! 
      }).catch(error => {
        console.log("Clicking Heart", error)
      })
    } else {
      axios.delete(`/api/user_favourites/${id}`,
      {myfavourite})
      .then(response => {
        console.log("axios call response>>>>>", response); 
      }).catch(error => {
        console.log("Clicking Heart", error)
      })

    }
  }


//  console.log(instrStatus)
 const handleConfirm = (e) => {
  e.preventDefault();
  handleClose();
  console.log('confirmation button clicked submitted');

  
  instrStatus.status.map((objs) =>{ //create attendees table(accepted:false, user_id: 1, event_instruments_id: 1)
    // console.log(instrStatus.event_id, x.name, x.qty)
    if (instrStatus.event_id === id) {
      // console.log(objs)
     const name = objs.name
    //  console.log(name)
     const qty = objs.quantity
    //  console.log(qty)
    console.log('confirmation request submitted');
    // axios
    //  .put(
    //   `/api/event_instruments/${id}`, //THIS SHOULD GIVE USER_ID & CREATE ATTENDEE TABLE with accepted: false, WHen Org respomd with confirm then change to true
    //   {
    //    status: [
    //     {
    //      name: 'Available',
    //      quantity: qty - 1,
    //     },
    //     {
    //      name: 'Pending',
    //      quantity: qty + 1,
    //     },
    //     {
    //      name: 'Filled',
    //      quantity: 0,
    //     },
    //    ],
    //   },
    //   {
    //    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    //   }
    //  )
  //    .then((response) => {
  //     console.log('PUT response >>>', response);
  //     if (response.data.status === 'updated') {
  //       setInstrStatus(response.data)
  //       setTimeout(function() {
  //       handleOpenMsg()
  //     }, 1500);
  //      console.log(
  //       'event update is successful. response data >>',
  //       response.data
  //       );
  //       //How do i re render the browser to see the chnages immediately
  //      //DO I need to save this response to state
  //     }
  //   })
  //   .catch((error) => {
  //       console.log('event update error', error);
  //   });
    }
  // else{
  //    setTimeout(function() {
  //    handleOpenNA()
  //   }, 2000);
  //  }
  });
 };

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
       <div className="heart-icon" onClick={handleLike}>
        {like? (<BsHeartFill style={{ color: 'rgb(244, 56, 56)', fontSize: '1.6rem' }} />
          ) : (
          <BsHeartFill
            style={{ color: 'whitesmoke', fontSize: '1.6rem' }}
            onMouseOver={({ target }) => (target.style.color = 'rgb(244, 56, 56)')}
            onMouseOut={({ target }) =>
            (target.style.color = 'rgba(244, 56, 56,0.2)')}
          />)
        }
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
        userPhone={userPhone}
        title={title}
       />
       <MesssageSentModal 
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
