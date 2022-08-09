import { React, useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import '../../scss/custom.scss';
import '../../App.scss';

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
 `;

const UserStyles = styled.div`

.base-container {
  width: 100vw;
  height: 80vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header h1 {
    font-size: 3rem;
    font-family: "Oswald", sans-serif;
    margin-bottom: 2.5rem;
  }

.userCard{
  height: 50vh;
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

.user-details{
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  overflow: hidden;
}

.bio{
  overflow: hidden;
  text-overflow: ellipsis;
}

//RIGHT
.right{
  height: 100%;
  // width:100%;
  flex:1;
}

.bio{
  font-size: 1.2rem;
}

.edit-button{
  justify-content:flex-end;
}

.m-1{
  flex-direction: row-reverse;
  border: none;
}
`;

function ApplicantProfile(props) {

    const [applicant, setApplicant] = useState({});
    const [applicantImg, setApplicantImg] = useState("");
    const [applicantInstruments, setApplicantInstruments] = useState([]);

    // const currentUser = JSON.parse(localStorage.getItem("user"));
    
    useEffect(function () {
      // needs applicants id 
      axios
        .get(`/api/users/4`)
        .then((res) => {
          setApplicant(res.data.user);
          setApplicantImg(res.data.image);
          setApplicantInstruments(res.data.instruments);
          console.log("user instruments>>", applicantInstruments);
        })
        .then((err) => console.log(err));
    }, []);


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
              <strong>@&nbsp;&nbsp;</strong>{applicant.handle}
            </div>
          </div>
          <div className="user-details">
            <div className="details">
              <div className="user-location">
                <strong>Location:&nbsp;&nbsp;</strong>{applicant.city}, {applicant.country}
              </div>
              {applicantInstruments && <div className="user-instruments"><strong>Instrument(s) I play:&nbsp;&nbsp;</strong>{applicantInstruments.name}</div>
              }
              <div className="about-me">
                <strong>About Me&nbsp;&nbsp;</strong>
              </div>
              <div className="bio">
                {applicant.bio}
              </div>
              </div>
            </div>
          </div>
          <div className="right">
            {applicantImg.length > 0 && <Img src={`http://localhost:3000/${applicantImg}`} /> }
          </div>
          <div  className="contact-button">
            <Button variant="dark"  className="m-1">TEXT</Button>
          </div>
          <div  className="contact-button">
            <Button variant="dark"  className="m-1">EMAIL</Button>
          </div>
        </div>
    </div>
  </UserStyles>
   )}
  </>
 );
}

export default ApplicantProfile;
