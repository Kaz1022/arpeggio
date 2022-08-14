import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
import axios from 'axios';
import EventListItem from './EventListItem';
import { EventFilterStyles } from '../styled-component/eventStyles-styled';
import '../../App.scss';

function EventFilter() {
 const [events, setEvents] = useState([]);
 const [query, setQuery] = useState([]);

 const [city, setCity] = useState();
 const [level, setLevel] = useState();
 const [genre, setGenre] = useState();
 const [instruments, setInstruments] = useState([]);
 const [instrument, setInstrument] = useState();

 useEffect(function () {
  axios
   .get(`/api/events`)
   .then((res) => setEvents(res.data))
   .catch((err) => console.log(err));
 }, []);

 useEffect(function () {
 axios.get('/api/events/instruments/Guitar')
 .then((res) => setInstruments(res.data))
 .catch((err) => console.log(err));
}, []);

 const handleSubmit = (e) => {
  e.preventDefault();
  axios
   .get(
    '/api/events/search/' + city + "/" + level + "/" + genre + "/" + instrument
   )
   .then((res) => setQuery(res.data))
   .then((err) => console.log(err));
 };

 const onChangeCity = (e) => {
  setCity(e.target.options[e.target.selectedIndex].text);
 };

 const onChangeInstrument = (e) => {
  setInstrument(e.target.options[e.target.selectedIndex].text);
 };

 const onChangeLevel = (e) => {
  setLevel(e.target.options[e.target.selectedIndex].text);
 };

 const onChangeGenre = (e) => {
  setGenre(e.target.options[e.target.selectedIndex].text);
 };

const makeUniqueArray = (key, arr) => {
  const result = [
    ...new Map(arr?.map(item => [item[key], item])).values()
  ]
  return result
}

const cityResult = makeUniqueArray('city', events)
const levelResult = makeUniqueArray('level', events)
const genreResult = makeUniqueArray('genre', events)

 return (
  <EventFilterStyles>
   <div className="form dropdowns">
    <select className="form-select" onChange={onChangeCity}>
     <option value="0"> Select City....</option>
     {cityResult.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.city}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeInstrument}>
     <option value="0"> Select Instrument....</option>
     {instruments.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.name}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeLevel}>
     <option value="0"> Select Level....</option>
     {levelResult.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.level}
      </option>
     ))}
    </select>
    <select className="form-select" onChange={onChangeGenre}>
     <option value="0"> Select Genre....</option>
     {genreResult.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.genre}
      </option>
     ))}
    </select>
    <button className="btn" onClick={handleSubmit}>
     Submit
    </button>
   </div>
   <br />
   <br />
   {query.length === 0
    ? events.map((item) => {
       return (
        <>
         <EventListItem
          key={item.id}
          id={item.id}
          title={item.title}
          user={item.user.handle}
          userPhone={item.user.phone}
          date={item.event_date}
          start={item.start_time}
          end={item.end_time}
          city={item.city}
          country={item.country}
          level={item.level}
          venue={item.venue_style}
          genre={item.genre}
          image={item.event_image_data}
          description={item.description}
          status={item.event_instruments.map((event_i) => {return event_i.status.map((e_status, i)=> {return e_status})})}
          event_instruments_id={item.event_instruments.map((event_i) => {return event_i.id})}
          created={item.created_at}
          instruments={instruments.map((item) => {return item})}
          instrument_quantity={item.event_instruments.map((event_i) => {return event_i.status})}
          events={events}
          setEvents={setEvents}
         />
        </>
       );
      })
    : query.map((item) => {
       return (
        <>
         <EventListItem
          key={item.id}
          id={item.id}
          title={item.title}
          user={item.user.handle}
          userPhone={item.user.phone}
          date={item.event_date}
          start={item.start_time}
          end={item.end_time}
          city={item.city}
          country={item.country}
          level={item.level}
          venue={item.venue_style}
          genre={item.genre}
          image={item.event_image_data}
          description={item.description}
          status={item.event_instruments.map((event_i) => {return event_i.status})}
          event_instruments_id={item.event_instruments.map((event_i) => {return event_i.id})}
          created={item.created_at}
          instruments={instruments.map((item) => {return item})}
          instrument_quantity={item.event_instruments.map((event_i) => {return event_i.quantity})}
          events={events}
          setEvents={setEvents}
         />
        </>
       );
      })}
  </EventFilterStyles>
 );
}

export default EventFilter;
