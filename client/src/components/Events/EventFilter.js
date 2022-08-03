import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
import axios from 'axios';
import EventListItem from './EventListItem';

const Styles = styled.div`
 .dropdown{
  display:flex;
  justify-content: center;
 }
`;

function EventFilter({ }) {
 const [events, setEvents] = useState([]);
 const [filter, setFilter] = useState([]);

 useEffect(function () {
  axios
   .get(`http://localhost:3000/api/events`)
   .then((res) => setEvents(res.data))
   .then((err) => console.log(err));
 }, []);

 const onCityChange = (e) => {
  // console.log(e.target.options[e.target.selectedIndex].text);
  axios
  .get("http://localhost:3000/api/events/search_city/" + e.target.options[e.target.selectedIndex].text)
  .then((res) => setFilter(res.data))
  .then((err) => console.log(err));
 };

 return (
  <Styles>
   <select className="form-control col-md-3" onChange={onCityChange}>
    <option value="0"> Select City....</option>
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>{eventItem.city} </option>
     ))}
   </select>
   <br/>
   <br/>
   {filter.map((item) => {
     return (
      <>
       <EventListItem
        key={item.id}
        title={item.title}
        user={item.user.handle}
        date={item.event_date}
        start={item.start_time}
        end={item.end_time}
        city={item.city}
        country={item.country}
        level={item.level}
        venue={item.venue_style}
        genre={item.genre}
        image={item.event_image}
        description={item.description}
        status={item.post_active}
        created={item.created_at}
       />
      </>
     );
    })}
  </Styles>
 );
}

export default EventFilter;
