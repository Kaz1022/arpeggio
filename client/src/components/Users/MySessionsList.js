import React, { useState, useEffect } from "react";
import "../../scss/custom.scss";
import axios from "axios";
import MySessionsListItem from "./MySessionsListItem";
import "../../App.scss";
import { Styles } from "../styled-component/users-styled";


function MySessionsList() {
  const [events, setEvents] = useState([]);
  const [instruments, setInstruments] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(function () {
    axios
      .get(`/api/users/${currentUser.userData.id}/sessions`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);


  // console.log("events data >>>", events);
  const mysessions = events.map((eachSession) => {
    return (
      <MySessionsListItem
        key={eachSession.id}
        id={eachSession.id}
        title={eachSession.title}
        user={eachSession.user.handle}
        date={eachSession.event_date}
        start={eachSession.start_time}
        end={eachSession.end_time}
        city={eachSession.city}
        country={eachSession.country}
        level={eachSession.level}
        venue={eachSession.venue_style}
        genre={eachSession.genre}
        image={eachSession.event_image_data}
        description={eachSession.description}
        status={eachSession.post_active}
        created={eachSession.created_at}
        instruments={instruments.map((item) => { return item})}
        instrument_quantity={eachSession.event_instruments.map((event_i) => { return event_i.status})}
        events={events}
        setEvents={setEvents}
      />
    );
  });

  return (
    <div className="base-container">
      <div className="header">
        <h1>My Sessions</h1>
      </div>
      <Styles>{mysessions}</Styles>
    </div>
  );
}

export default MySessionsList;
