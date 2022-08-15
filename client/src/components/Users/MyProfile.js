import { React } from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import '../../scss/custom.scss';
import '../../App.scss';
import { UserStyles } from '../styled-component/users-styled';

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
 `;

function MyProfile(props) {

  const handleOnClick = () => {

  }

 return (
  <>
   {props.loggedInStatus === 'NOT_LOGGED_IN' ? (
    <div className="header">
     <div className="header">
      <h1>YOU NEED TO LOGIN FIRST!</h1>
      <p>
       <a href="/login">Go to LOGIN</a>
      </p>
     </div>
    </div>
   ) : (
  <UserStyles>
    <div className="base-container">
      <div className="title">
        <h1>USER PROFILE</h1>
      </div>
      <div className="userCard">
        <div className="left">
          <div className="top">
            <div className="user-name">
              <strong>@&nbsp;&nbsp;</strong>{props.currentUser.handle}
            </div>
          </div>
          <div className="user-details">
            <div className="details">
              <div className="user-location">
                <strong>Location:&nbsp;&nbsp;</strong>{props.currentUser.city}, {props.currentUser.country}
              </div>
              {props.currentUserInstruments && <div className="user-instruments"><strong>Instrument(s) I play:&nbsp;&nbsp;</strong>{props.currentUserInstruments.name}</div>
              }
              <div className="about-me">
                <strong>About Me&nbsp;&nbsp;</strong>
              </div>
              <div className="bio">
                {props.currentUser.bio}
              </div>
              </div>
            </div>
          </div>
          <div className="right">
            {props.currentUserImage.length > 0 && <Img src={`http://localhost:3000/${props.currentUserImage}`} /> }
          </div>
        </div>
      <div  className="edit-button">
        <Button variant="dark"  className="m-1" onClick={handleOnClick}>EDIT</Button>
      </div>
    </div>
  </UserStyles>
   )}
  </>
 );
}

export default MyProfile;
