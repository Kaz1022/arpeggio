import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Signup from './components/SignUp';
import EventList from './components/Events/EventList';
import NavigationBar from './components/NavigationBar';
import NavigationAfterLogin from './components/NavigationAfterLogin';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home/Main';
import Dashboard from './components/Dashboard';
import './App.scss';

function App () {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [currentUser, setCurrentUser] = useState({})

  function handleLogin (data) {
    setLoggedInStatus("LOGGED_IN")
    setCurrentUser(data.user)
  }

  function handleLogout () {
    setLoggedInStatus("NOT_LOGGED_IN")
    setCurrentUser({})
  }

  useEffect(() => {
    checkLoginStatus()
  }, []);

  const checkLoginStatus = () => {
    axios.get("/api/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged in status >>>>>", response.data);
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN")
          setCurrentUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN")
          setCurrentUser({})
        }
    }).catch(error => {
      console.log("Login Error", error);
    })
  }


  return (
    <Router>
      <div className="page-container">

      {loggedInStatus ===  "LOGGED_IN" ? (
        <NavigationAfterLogin handleLogout={handleLogout}　loggedInStatus={loggedInStatus} />
        ): (
        <NavigationBar />
        )
      } 
        <Routes>
          <Route exact path ="/" element={<Home loggedInStatus={loggedInStatus}/>} />
          <Route exact path ="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
          <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/events" element={<EventList />} />
        </Routes>
        
        <div className="content-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  );
}


export default App;