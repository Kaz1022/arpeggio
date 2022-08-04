import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import '../../scss/custom.scss';
import '../../App.scss';

import main from '../../assets/images/main.jpeg';

const Img = styled.img.attrs({
 src: `${main}`,
})`
  max-width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
  // opacity: 0.92;
 }
 `;

const EventStyles = styled.div`
.card{
  display:flex;
  flex-direction: column;
  align-items:center;
  border: none;

}
.eventCard{
  height: 50vh;
  // max-height: 90vh;
  width: 70%;
  margin: 50px;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify content: space-betweeen;
  align-items:center;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  background-color: #FFFFFF;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.event-name{
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 1.74rem;
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
  flex-wrap:wrap;
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
  flex-wrap:wrap;
}
.details{
  display:flex;
  justify-content:space-between;
  padding-right: 10rem;
}
.spots-heading{
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
}
.event-description{
  font-size: 1.2rem;
  margin: 30px 0px;
  line-height: 30px;
}
.instrument-icons{
  width: 50%;
  display:flex;
  justify content: space-around;
}

//RIGHT
.right{
  height: 100%;
  // width:100%;
  flex:1;
}
`;

function EventListItem({
 title,
 user,
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
   <div className="card">
    <div className="eventCard">
     <div className="left">
      <div className="top">
       <div className="event-name">{title}</div>
       <div className="event-organiser">
        <strong>By:&nbsp;&nbsp;</strong>
        {user}
       </div>
       <div className="heart-icon">
        <BsHeartFill
         style={{ color: 'whitesmoke', fontSize: '1.6rem' }}
         onMouseOver={({ target }) => (target.style.color = 'rgb(244, 56, 56)')}
         onMouseOut={({ target }) =>
          (target.style.color = 'rgba(244, 56, 56,0.2)')
         }
        />
       </div>
      </div>

      <div className="event-details">
       <div className="event-date">
        <strong>Date:&nbsp;&nbsp;</strong>
        {date}
       </div>
       <div className="details">
        <div className="details1">
         <div className="event-location">
          <strong>Location:&nbsp;&nbsp;</strong>
          {city}, {country}
         </div>
         <div className="event-level">
          <strong>Level:&nbsp;&nbsp;</strong> {level}
         </div>
        </div>
        <div className="details2">
         <div className="event-venue">
          <strong>Venue:&nbsp;&nbsp;</strong>
          {venue}
         </div>
         <div className="genre">
          <strong>Genre:&nbsp;&nbsp;</strong>
          {genre}
         </div>
        </div>
       </div>
      </div>

      <div className="event-description">{description}</div>

      <div className="spots">
       <div className="spots-heading">AVAILABLE SPOTS</div>
       <div className="instrument-icons">
        <div className="instrument1 instrument">1</div>
        <div className="instrument2 instrument">2</div>
        <div className="instrument3 instrument">3</div>
       </div>
      </div>
     </div>

     <div className="right">
      <img src={image} alt=''/>
      <Img src="../assets/images/main.jpeg" />
      {/* <div>Post created ? day/s ago</div> */}
     </div>
    </div>
   </div>
  </EventStyles>
 );
}

export default EventListItem;
