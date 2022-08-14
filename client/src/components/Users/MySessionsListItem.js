import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AcceptanceModal from "../Modals/AcceptanceModal";
import AcceptedModal from "../Modals/AcceptedModal";
import AlreadyFilledModal from "../Modals/AlreadyFilledModal";
import axios from 'axios';
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
} from "../styled-component/instrumenticons-styled";
import { Img, EventStyles } from "../styled-component/mySessionListItem-styled";


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
}) {
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showNAvail, setShowNAvail] = useState(false);
  const [instrStatus, setInstrStatus] = useState();
  const [activeEventInstrument, setActiveEventInstrument] = useState();

  const handleShow = (eventInstrumentId) => {
    setActiveEventInstrument(eventInstrumentId);
    setShow(true);
  };
  const handleClose = () => {
    setActiveEventInstrument(undefined);
    setShow(false);
  };

  const handleCloseMsg = () => setShowMsg(false);
  const handleOpenMsg = () => setShowMsg(true);

  const handleCloseNA = () => setShowNAvail(false);
  const handleOpenNA = () => setShowNAvail(true);

  const instrumentsArr = [];
  console.log("activeEventInstrument", activeEventInstrument)

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
            <div key={`selector-${i++}`} onClick={() => handleShow(ei.id)}>
              <Comp />
            </div>
          );
        });
      });
      return instrumentsAry;
    });
  };

  useEffect(function () {
    axios
      .get(`/api/event_instruments/${id}`) 
      .then((res) => setInstrStatus(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleConfirm = (eventInstrumentId) => {
    handleClose();
    console.log("confirmation button clicked submitted"); //create attendees table(accepted:false, user_id: 1, event_instruments_id: 1)
    const status = instrumentsArr.find(
      (e, i) => eventInstrumentId === e.event_instruments_id).status;
    console.log(status)
  
    const qtyA = status["Available"];
    const qtyP = status["Pending"];
    const qtyF = status["Filled"];
    if (status["Pending"] > 0) {
      console.log("confirmation request submitted");
      axios
        .put(
          `/api/event_instruments/${eventInstrumentId}`, 
          {
            status: [
              {
                name: "Available",
                quantity: qtyA,
              },
              {
                name: "Pending",
                quantity: qtyP - 1,
              },
              {
                name: "Filled",
                quantity: qtyF + 1,
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
              handleOpenMsg();
            }, 1500);
            console.log("event update was successful");
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
                show={show}
                onHide={handleClose}
                onConfirm={handleConfirm}
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
              <div className="instrument-icons">
                <div className="icons">{getEventData()}</div>
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