import { React, useEffect, useState } from "react";
import styled from "styled-components";
import "../../scss/custom.scss";
import "../../App.scss";
import axios from "axios";
import EventListItem from "../Events/EventListItem";

const Styles = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

  .btn {
   font-weight: 600;
   margin-left: 0.5rem;
   padding: 8px 18px;
   background: #bb0dbe;
   color: #e2ef70;
   border: 1px solid #e2ef70;
  }
 }
`;

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
      <Styles>{myfavourites}</Styles>
    </div>
  );
}

export default MyFavouritesList;
