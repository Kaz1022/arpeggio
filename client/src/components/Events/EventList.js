import React, { useState, useEffect } from 'react';
import EventListItem from './EventListItem';
import EventFilter from './EventFilter';
import styled from 'styled-components';
import '../../scss/custom.scss';
import '../../App.scss';

const Styles = styled.div`
 .event {
  background: #fcfcfc;
 }
`;

function EventList() {

//  console.log(state.items);
 return (
  <Styles>
   <div className="event">
    <EventFilter />
   </div>
  </Styles>
 );
}

export default EventList;
