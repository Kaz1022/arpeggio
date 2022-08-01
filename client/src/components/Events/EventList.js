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

 console.log(state.items);
 return (
  // <>
   <div className="event">
    EVENT LIST .JS
    {state.items.map((item) => {
     return (
      // <>
       <EventListItem key={item.id} title={item.title} date={item.event_date} start={item.start_time} end={item.end_time} city={item.city} country={item.country} level={item.level} venue={item.venue_style} genre={item.genre} image={item.event_image} description={item.description} status={item.post_active} created={item.created_at}/>
      // </>
     );
    })}
   </div>
  // </>
 );
}

export default EventList;
