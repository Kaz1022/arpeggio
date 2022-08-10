import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
import axios from 'axios';
import MySessionsListItem from './MySessionsListItem';
import '../../App.scss';

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

function MySessionsList() {
  const [events, setEvents] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  useEffect(function () {
    axios
      .get(`/api/users/${currentUser.userData.id}/sessions`)
      .then((res) => setEvents(res.data))
      .then((err) => console.log(err));
  }, []);

  console.log("events data >>>", events);
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
          events={events}
        />
    );
  });

  return <Styles>{mysessions}</Styles>

}

export default MySessionsList;
