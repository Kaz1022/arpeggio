import { React, useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import '../../scss/custom.scss';
import '../../App.scss';

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
 `;

const UserStyles = styled.div`
.card{
  display:flex;
  flex-direction: column;
  align-items:center;
  border: none;

}
.userCard{
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
.user-name{
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
.user-details{
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
}
.details{
  display:flex;
  justify-content:space-between;
  padding-right: 10rem;
}

//RIGHT
.right{
  height: 100%;
  // width:100%;
  flex:1;
}

.bio{
  font-size: 1rem;
}
`;

function MyProfile(props) {

  const [currentUserInstruments, setCurrentUserInstruments] = useState();
  
  console.log("current user data>>>>", props.currentUser);

  useEffect(() => {
    if(props.currentUser) {
    axios.get(`/api/users/${props.currentUser.id}/instruments`)
      .then(response => {
        console.log("My Profile Component Rendered:response>>>", response.data)
        setCurrentUserInstruments(response.data);
        console.log("currentUserInstruments were set >>>>>", currentUserInstruments)
      }).catch(error => console.log("Connecting API Error >>> ", error))
  }}, [props]);

 return (
  <UserStyles>
  <div className="title">
    <h1>USER PROFILE</h1>
  </div>
   <div className="card">
    <div className="userCard">
      
      <div className="left">
        <div className="top">
          <div className="user-name"><strong>@&nbsp;&nbsp;</strong>{props.currentUser.handle}</div>
        </div>

        <div className="user-details">
          <div className="details">
            <div className="details1">
              <div className="user-location"><strong>Location:&nbsp;&nbsp;</strong>{props.currentUser.city}, {props.currentUser.country}</div>
              {props.currentUser.lengh > 0 && <div className="user-instruments"><strong>Instrument(s) I play:&nbsp;&nbsp;</strong>{currentUserInstruments.name}.</div> }
            </div>
            <div className="details2">
                <div className="about-me"><strong>About Me...:&nbsp;&nbsp;</strong></div>
                <div className="bio">{props.currentUser.bio}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
      {props.currentUserImage.length > 0 && <Img src={`http://localhost:3000/${props.currentUserImage}`} /> }

      </div>
    </div>
   </div>
  </UserStyles>
 );
}

export default MyProfile;
