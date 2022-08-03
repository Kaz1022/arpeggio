import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/signup.scss';

const LOGIN_URL = "/api/login";

function Login () {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleSubmit = (e) => {
    axios.post("/api/login",
            {
                user: {
                    email: email,
                    password: password,
                }
            },
            { withCredentials: true }
        ).then(response => {
            console.log("response >>>", response)
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
            <a href="#">Go to Home</a>
          </p>
      </section>
    ) : (
    <div className="base-container">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
          ref={userRef}
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
