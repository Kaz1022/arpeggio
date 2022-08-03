import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/signup.scss';

function Login (props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post("/api/sessions",
            {
                user: {
                    email: email,
                    password: password,
                }
            },
            { withCredentials: true }
        ).then(response => {
          if (response.data.logged_in) {
            console.log("response data >>>", response.data);
            setSuccess(true);
            props.handleLogin(response.data)
            navigate('/events');
          }     
        }).catch(error => {
            console.log("registration error", error)
        })
    e.preventDefault();
  }

  return (
   <>
    {success ? (
      <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
      </section>
    ) : (
    <div className="base-container">
      <div className="header">
        <h1>Log in</h1>
     </div>
     <div className="content">
      <div className="form">
       <div className="form-group">
        <form onSubmit={handleSubmit}>
         <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={ e => setEmail(e.target.value)}
          value={email}
          required
         />

         <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={ e => setPassword(e.target.value)}
          value={password}
          required
         />

         <button type="submit">Login</button>
        </form>
       </div>
      </div>
     </div>
    </div>
    )}
   </>
  );
}
export default Login;
