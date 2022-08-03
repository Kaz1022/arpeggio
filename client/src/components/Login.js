import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios';
import '../scss/signup.scss';

const LOGIN_URL = "/api/login";

function Login () {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({}))

    } catch (err) {

    }

    setUser('');
    setPassword('');
    setSuccess(true);
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
          type="text"
          name="handle"
          placeholder="Username"
          ref={userRef}
          onChange={ e => setUser(e.target.value)}
          value={user}
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
