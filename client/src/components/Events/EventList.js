import React, { useState, useEffect } from 'react';
import EventListItem from './EventListItem';

const api_url = `http://localhost:3000/api/events`;

function EventList() {
 const [state, setState] = useState({ items: [] });

 function getEvents() {
  fetch(api_url)
   .then((response) => response.json())
   .then((response_items) => {
    setState({ items: response_items });
   });
 }

 useEffect(() => {
  getEvents();
 }, []);

 return (
  <div>
    console.log(state.items);
   EVENT LIST .JS
   <EventListItem />
  </div>
 );
}

export default EventList;
