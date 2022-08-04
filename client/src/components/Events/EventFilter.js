import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
import axios from 'axios';
import EventListItem from './EventListItem';
import '../../App.scss';

const Styles = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 .dropdowns {
  margin: 2rem 13rem;
  display: flex;
  justify-content: center;
 }
`;

function EventFilter({}) {
 const [events, setEvents] = useState([]);
 const [query, setQuery] = useState([]);

 useEffect(function () {
  axios
   .get(`http://localhost:3000/api/events`)
   .then((res) => setEvents(res.data))
   .then((err) => console.log(err));
 }, []);

 const onChangeCity = (e) => {
  console.log(e.target.options[e.target.selectedIndex].text);
  axios
   .get(
    'http://localhost:3000/api/events/search/' + e.target.options[e.target.selectedIndex].text
   )
   .then((res) => setQuery(res.data))
   .then((err) => console.log(err));
 };

 const onChangeInstrument = (e) => {};

 const onChangeLevel = (e) => {};

 const onChangeGenre = (e) => {};

 const handleSubmit = (e) => {
  e.preventDefault();
 };

 return (
  <Styles>
   <div className="form dropdowns">
    <select className="form-select" onChange={onChangeCity}>
     <option value="0"> Select City....</option>
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.city}{' '}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeInstrument}>
     <option value="0"> Select Instrument....</option>
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.instruments[0].name}{' '}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeLevel}>
     <option value="0"> Select Level....</option>
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.level}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeGenre}>
     <option value="0"> Select Genre....</option>
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.genre}{' '}
      </option>
     ))}
    </select>
    <button onClick={handleSubmit}>Submit</button>
   </div>
   <br />
   <br />
   {query.map((item) => {
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
