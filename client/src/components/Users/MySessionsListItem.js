import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TimeAgo from 'react-timeago';
import AcceptanceModal from "../Modals/AcceptanceModal";
import AcceptedModal from "../Modals/AcceptedModal";
import AlreadyFilledModal from "../Modals/AlreadyFilledModal";
import axios from "axios";
import "../../scss/custom.scss";
import "../../App.scss";
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
} from "../styled-component/icons-styled";
import { Img, EventStyles } from "../styled-component/mySessionListItem-styled";
import CancelAttdModal from "../Modals/CancelAttdModal";
import CancelSuceedModal from "../Modals/CancelSucceedModal";

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
  event_instruments_id,
  created,
  instruments,
  instrument_quantity,
  events,
  setEvents
}) {
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showNAvail, setShowNAvail] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showCanceled, setShowCanceled] = useState(false);
  const [activeEventId, setActiveEventId] = useState();
  const [activeEventInstrument, setActiveEventInstrument] = useState();
  const [attendee, setAttendee] = useState({user: {handle: "Test"}});

  const handleShow = (eventInstrumentId, index, eventId) => {
    setActiveEventInstrument(eventInstrumentId);
    setActiveEventId(eventId);
   
    // Shows different Modal depends on the status but only works if there is one instruments.
    axios.get(`/api/event_instruments/${eventInstrumentId}/attendee`)
      .then(response => {
        setAttendee(response.data[index -1])
    });
  
    const status = instrumentsArr.find((e, i) => eventInstrumentId === e.event_instruments_id).status;
    
    if (status["Pending"]) {
      setShow(true);
    } else if (status["Filled"]) {
      handleOpenRM();
    } else {
      setShow(false);
    }
  };

  const handleClose = () => {
    setActiveEventInstrument(undefined);
    setShow(false);
  };

  const handleCloseMsg = () => setShowMsg(false);
  const handleOpenMsg = () => setShowMsg(true);

  const handleCloseNA = () => setShowNAvail(false);
  const handleOpenNA = () => setShowNAvail(true);

  const handleCloseRM = () => {
    setActiveEventInstrument(undefined);
    setShowRemove(false);
  };

  const handleOpenRM = () => setShowRemove(true);

  const handleCloseCld = () => setShowCanceled(false);
  const handleOpenCld = () => setShowCanceled(true);

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
          instrumentsAry.push(
            <div className="render-icon" key={`selector-${i++}`} onClick={() => handleShow(ei.id, i, ei.event_id)}>
              <Comp />
            </div>
          );
        });
      });
      return instrumentsAry;
    });
  };

  const handleConfirm = (eventInstrumentId, attendeeId, eventId) => {
    handleClose();
    console.log("confirmation button clicked submitted");
    const status = instrumentsArr.find(
      (e, i) => eventInstrumentId === e.event_instruments_id
    ).status;
      
    const qtyA = status["Available"];
    const qtyP = status["Pending"];
    const qtyF = status["Filled"];

    if (status["Pending"] > 0) {
      console.log("confirmation request submitted");
      const status = [
        { name: "Available", quantity: qtyA },
        { name: "Pending", quantity: qtyP - 1 },
        { name: "Filled", quantity: qtyF + 1 }
      ]

      axios
        .put(
          `/api/event_instruments/${eventInstrumentId}`,
          {
            status: status,
          },
          {
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        .then((response) => {
          const event =  events.find((e) => {
            return e.id === eventId
          })
          const eventInstrument = event.event_instruments.find((instrument) =>{
            return instrument.id === eventInstrumentId
          })
          eventInstrument.status = status;
          event.event_instruments = event.event_instruments.map((instrument) =>{
            if( instrument.id === eventInstrumentId){
              return eventInstrument
            }else{
              return instrument
            }
          })
          const newEvents = events.map((e) =>{
            if(e.id === eventId){
              return event
            }else{
              return e
            }
          })
          setEvents(newEvents)

          if (response.data.status === "updated") {
            setTimeout(function () {
              handleOpenMsg();
            }, 1500);
            console.log("event update was successful");
            return axios.put(
              `/api/attendees/${attendeeId}`,
              {
               accepted: true
              },
              {
               headers: {
                'Content-type': 'application/json; charset=UTF-8',
               },
              }
             );
          }
        })
        .catch((error) => {
          console.log("event update error", error);
        });
    } else {
      setTimeout(function () {
        handleOpenNA();
      }, 2500);
    }
  };

  const handleRemove = (eventInstrumentId, attendeeId) => {
     handleCloseRM();
    const status = instrumentsArr.find(
      (e, i) => eventInstrumentId === e.event_instruments_id
    ).status;

    const qtyA = status["Available"];
    const qtyP = status["Pending"];
    const qtyF = status["Filled"];
    if (status["Filled"] > 0) {
      axios
        .put(
          `/api/event_instruments/${eventInstrumentId}`,
          {
            status: [
              {
                name: "Available",
                quantity: qtyA + 1
              },
              {
                name: "Pending",
                quantity: qtyP
              },
              {
                name: "Filled",
                quantity: qtyF - 1
              },
            ],
          },
          {
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        .then((response) => {
          console.log("PUT response >>>", response);
          if (response.data.status === "updated") {
            setTimeout(function () {
              handleOpenCld();
            }, 1500);
            console.log("event update was successful, attendee id>>>", attendeeId);
            return axios.delete(`/api/attendees/${attendeeId}`);
          }
        })
        .catch((error) => {
          console.log("event update error", error);
        });
    } 
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
              <AcceptanceModal
                eventInstrumentId={activeEventInstrument}
                eventId={activeEventId}
                show={show}
                onHide={handleClose}
                onConfirm={handleConfirm}
                attendee={attendee}
              />
              <AcceptedModal
                show={showMsg}
                onHide={handleCloseMsg}
                onClose={handleOpenMsg}
              />
              <AlreadyFilledModal
                show={showNAvail}
                onHide={handleCloseNA}
                onClose={handleOpenNA}
              />
              <CancelAttdModal
                eventInstrumentId={activeEventInstrument}
                show={showRemove}
                onHide={handleCloseRM}
                onConfirm={handleRemove}
                attendee={attendee}
              />
              <CancelSuceedModal
                show={showCanceled}
                onHide={handleCloseCld}
                onClose={handleOpenCld}
              />
              <div className="instrument-icons">
                <div className="icons">{getEventData()}</div>
              </div>
            </div>
          </div>

          <div className="right">
            {/* <div>
              <Img src={image} />
            </div> */}
            <img className="main_image" src={image} alt="" />
            <TimeAgo className="timeago" date={created}></TimeAgo>
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
