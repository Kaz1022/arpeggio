import { React, useEffect, useState } from "react";
import styled from "styled-components";
import "../../scss/custom.scss";
import "../../App.scss";
import axios from "axios";
import EventListItem from "../Events/EventListItem";
import { Link } from "react-router-dom";
import {Styles} from '../styled-component/users-styled'

function MyFavouritesList({ loggedInStatus }) {
  const [events, setEvents] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(function () {
    axios
      .get(`/api/users/${currentUser.userData.id}/favourites`)
      .then((res) => setEvents(res.data))
      .then((err) => console.log(err));
  }, []);

  const myfavourites = events.map((eachSession) => {
    return (
      <EventListItem
        key={eachSession.id}
        id={eachSession.id}
        title={eachSession.title}
        user={eachSession.user.handle}
        userPhone={eachSession.user.phone}
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
        events={events}
        setEvents={setEvents}
      />
    );
  });

  return (
    <div className="base-container">
      <div className="header">
        <h1>My Favourites</h1>
      </div>
      {events.length === 0 ? 
      (<>
        <div className="header">
          <h2>You have no favourites!</h2>
        </div>
        <Link to="/events">Go find your session!</Link>
      </>
      )
      : 
      (
        <Styles>{myfavourites}</Styles>
      )}
    </div>
  );
}

export default MyFavouritesList;
