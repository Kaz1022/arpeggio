import React from 'react';
import AttendeeListItem from './AttendeeListItem';


function AttendeeList ({eventsData, id }) {
  console.log("Attendee list events data >>>", eventsData);
  const event = eventsData.find((e) => e.id === id);

  const attendees = event.attendees.map(eachAttendee => {
    return (
      <AttendeeListItem
        key={eachAttendee.id}
        name={eachAttendee.user_id}
      />
    );
  });

  return (
    <section>
      <h4>Attendees</h4>
      <ul >{attendees}</ul>
    </section>
  );
}

export default AttendeeList;