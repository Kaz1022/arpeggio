import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import '../../scss/custom.scss';

const EventStyles = styled.div`

.event-card{
  min-height: 50vh;
  margin: 30px 15vw;
  display:flex;
  flex-wrap:wrap;
  justify content: space-betweeen;
  align-items:center;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  background-color: #FFFFFF;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.event-name{
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
}
.top{
  margin:15px 0px;
}

//LEFT
.left{
  position: relative;
  padding: 10px 25px;
  line-height: 38px;
  height: 100%;
  flex:1.5;
}
.top{
  display:flex;
  justify-content: space-between;
}
.heart-icon{
  position: absolute;
  left: 92%;
  bottom: 5%;
}
.event-details{
  display: flex;
  flex-direction:column;
}
.details{
  display:flex;
  justify-content:space-between;
  padding-right: 10rem;
}
.spots-heading{
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
}
.event-description{
  margin: 30px 0px;
  line-height: 30px;
}

//RIGHT
.right{
  background-color:whitesmoke;
  height: 100%;
  flex:1;
}
`;

function EventListItem({
 title,
 date,
 start,
 end,
 city,
 country,
 level,
 venue,
 genre,
 image,
 description,
 status,
 created,
}) {
 return (
  <EventStyles>
   <div className="event-card">
    <div className="left">
     <div className="top">
      <div className="event-name">
       JAM SESSION THIS FRIDAY! NEED GUITARISTS!
      </div>
      <div className="event-organiser">BY: Mari </div>
      <div className="heart-icon">
       <BsHeartFill 
        style={{ color: 'whitesmoke', fontSize: "1.6rem"}}
        onMouseOver={({ target }) => (target.style.color = 'rgb(244, 56, 56)')} //FIX ON CLICK
        onMouseOut={({ target }) => (target.style.color = 'rgba(244, 56, 56,0.2)')}
       />
      </div>
     </div>

     <div className="event-details">
      <div className="event-date"><strong>DATE:&nbsp;&nbsp;</strong> Friday August 26, 2022</div>
      <div className="details">
       <div className="details1">
        <div className="event-location"><strong>LOCATION:&nbsp;&nbsp;</strong> Downtown Toronto </div>
        <div className="event-level"><strong>LEVEL:&nbsp;&nbsp;</strong> All Levels</div>
       </div>
       <div className="details2">
        <div className="event-venue"><strong>VENUE:&nbsp;&nbsp;</strong> My Home </div>
        <div className="genre"><strong>GENRE:&nbsp;&nbsp;</strong> Rock</div>
       </div>
      </div>
     </div>

     <div className="event-description">
      I am having a Jam session this Friday Night at my place. Im Looking for
      some guitarists! Feel free to save a spot below and I will reply to you
      ASAP!
     </div>

     <div className="spots">
      <div className="spots-heading">AVAILABLE SPOTS</div>
      <div className="instrument-icons">
        <div className="instrument1">1</div>
        <div className="instrument2">2</div>
        <div className="instrument3">3</div>
      </div>
     </div>
    </div>

    <div className="right">
     <div> IMAGE </div>
     <div>Post created ? day/s ago</div>
    </div>
   </div>
  </EventStyles>
 );
}

export default EventListItem;
