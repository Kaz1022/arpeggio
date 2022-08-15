import React from 'react';
import EventFilter from './EventFilter';
import '../../scss/custom.scss';
import { EventListStyles } from '../styled-component/eventStyles-styled';
import '../../App.scss';


function EventList() {

 return (
  <EventListStyles>
   <div className="event">
    <EventFilter />
   </div>
  </EventListStyles>
 );
}

export default EventList;
