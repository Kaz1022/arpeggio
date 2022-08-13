import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
import AcceptanceModal from "../Modals/AcceptanceModal";

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
  const [statuss, setStatuss] = useState();

  const getEventData = () => {
    const event = events.find((e) => e.id === id); //find event where the event id is equal to id -> here e is each event object

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
    // setIconData(newObjArr)
  }, []); //url id

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
              <AcceptanceModal
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