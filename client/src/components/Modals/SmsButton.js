import React from 'react';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function SmsButton({userPhone, title}) {

  const organizerNum = userPhone.replace(/[^0-9]/g, '') 

  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  let sms_message = {
    mobile_number: `+1${organizerNum}`, 
    message: `${currentUser.userData.first_name} wants to join your session "${title}"! Text ${currentUser.userData.phone} for futher chat! Accept the offer on your browser!`
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