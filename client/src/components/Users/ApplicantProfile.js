import { React, useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import '../../scss/custom.scss';
import '../../App.scss';
import {ApplicantImg} from '../styled-component/icons-styled' 
import {UserStyles} from '../styled-component/users-styled'

function ApplicantProfile(props) {

    const [applicant, setApplicant] = useState({});
    const [applicantImg, setApplicantImg] = useState("");
    const [applicantInstruments, setApplicantInstruments] = useState({});

    // const currentUser = JSON.parse(localStorage.getItem("user"));
    
    useEffect(function () {
      // needs applicants id 
      axios
        .get(`/api/users/4`)
        .then((res) => {
          setApplicant(res.data.user);
          setApplicantImg(res.data.image);
          setApplicantInstruments(res.data.instruments);
          console.log("user instruments>>", res.data.instruments);
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
              <br/>
              <div  className="contact-button">
                <Button variant="dark"  className="m-1">TEXT</Button>
                <Button variant="dark"  className="m-1">EMAIL</Button>
              </div>
              </div>
            </div>
          </div>
          <div className="right">
            {applicantImg.length > 0 && <ApplicantImg src={`http://localhost:3000/${applicantImg}`} /> }
          </div>
        </div>
    </div>
  </UserStyles>
   )}
  </>
 );
}

export default ApplicantProfile;
