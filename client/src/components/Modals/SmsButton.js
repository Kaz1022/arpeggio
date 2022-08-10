import React from 'react';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function SmsButton({userPhone}) {

  const organizerNum = userPhone.replace(/[^0-9]/g, '') 

  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  let sms_message = {
    mobile_number: `+1${organizerNum}`, 
    message: `${currentUser.userData.first_name} wants to join the session! Text ${currentUser.userData.phone} for futher chat! Accept the offer in your browser http://localhost.3000/mysessions !`
}

  const sendSms = (event) => {
    event.preventDefault();
    axios.post("/api/sms_messages", 
      {sms_message}
      ).then(res => console.log(res))
      .catch(error => {
      console.log("sending SMS error", error)
    })
  }

  return (
    <Button variant="primary" onClick={sendSms} >Yes! Send Text</Button>
  );
 }
 
 export default SmsButton;