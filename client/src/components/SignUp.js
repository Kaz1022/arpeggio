import React from 'react';
import SignupForm from './SignUpForm';

function Signup(props) {
 return (
  <>
   <SignupForm handleLogin={props.handleLogin}></SignupForm>
  </>
 );
}

export default Signup;
