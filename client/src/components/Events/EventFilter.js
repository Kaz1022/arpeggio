import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../scss/custom.scss';
import axios from 'axios';
import EventListItem from './EventListItem';
import '../../App.scss';

const Styles = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 .form {
  margin: 2rem 13rem;
  display: flex;
  justify-content: center;

  .form-select{
    &:focus {
      outline: none;
      box-shadow: 0px 0px 4px 0.01px #b819a2b2;
    }
  }

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

function EventFilter() {
 const [events, setEvents] = useState([]);
 const [query, setQuery] = useState([]);

 const [city, setCity] = useState();
 const [level, setLevel] = useState();
 const [genre, setGenre] = useState();
 const [instrument, setInstrument] = useState();

 useEffect(function () {
  axios
   .get(`/api/events`)
   .then((res) => setEvents(res.data))
   .then((err) => console.log(err));
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
  // Since I will be returning an array of unique objects, that is why it is an array
  const result = [
    ...new Map(arr.map(item => [item[key], item])).values() // -> LINE 1
  ]
  // BEFORE RUNNING THE values() FUNCTION, THE OUTPUT LOOKS LIKE THIS
  // [
  //   [ 'toronto', { id: 2, city: 'toronto' } ],
  //   [ 'vancouver', { id: 4, city: 'vancouver' } ]
  // ]
  // RUNNING THE values() FUNCTION RETURNS THE 2ND ITEM OF EACH ARRAY INSIDE THE FIRST ARRAY
  // i.e- { id: 2, city: 'toronto' } OR THE ITEM ITSELF
  // RESULT LOOKS LIKE: [ { id: 2, city: 'toronto' }, { id: 4, city: 'vancouver' } ]
  return result
}

const cityResult = makeUniqueArray('city', events)
const levelResult = makeUniqueArray('level', events)
const genreResult = makeUniqueArray('genre', events)

 return (
  <Styles>
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
     {events.map((eventItem) => (
      <option key={eventItem.id} value={eventItem.id}>
       {eventItem.instruments[0].name}
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
          instruments={item.instruments}
          instrument_quantity={item.event_instruments}
         />
        </>
       );
      })
    : query.map((item) => {
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
          instruments={item.instruments}
          instrument_quantity={item.event_instruments}
         />
        </>
       );
      })}
  </Styles>
 );
}

export default EventFilter;
