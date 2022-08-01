import React from 'react';

function EventListItem({title, date, start, end, city, country, level, venue, genre, image, description, status, created}) {

 return (
  <>
   <div className='event-card'>

    <div className='left'>
      <div className="top">
        <div className='event-name'>HEADING OF THE EVENT</div>
        <div className="event-organiser">BY: Mari </div>
      </div>
      <div className='event-details'>
        <div className="event-date">DATE: </div>
        <div className="event-location">LOCATION: </div>
        <div className="event-venue">VENUE: </div>
        <div className="event-level">LEVEL: </div>
        <div className="genre">GENRE: </div>
      </div>
      <div className="event-description">This is a description of the Event</div>
      <div className="spots">
        <div className="spots-heading">AVAILABLE SPOTS</div>
        <div className="instrument-icons"></div>
      </div>
    </div>

    <div className='right'>
      <div> IMAGE </div>
      <div>Post created ? day/s ago</div>
    </div>

   </div>
  </>
 );
}

export default EventListItem;
