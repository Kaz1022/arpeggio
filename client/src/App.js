import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Signup from './components/SignUp';
import EventList from './components/Events/EventList';
import NavigationBar from './components/NavigationBar';
import NavigationAfterLogin from './components/NavigationAfterLogin';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home/Main';
import MyProfile from './components/Users/MyProfile';
import MyFavourites from './components/Users/MyFavourites';
import EventForm from './components/Events/EventForm';
import MySessionsList from './components/Users/MySessionsList';
import './App.scss';

function App () {

  const [loading, setLoading] = useState(true);
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [currentUser, setCurrentUser] = useState({})
  const [currentUserImage, setCurrentUserImage] = useState("")
  const [currentUserInstruments, setCurrentUserInstruments] = useState({});

  function handleLogin (data) {
    setLoggedInStatus("LOGGED_IN")
    setCurrentUser(data.user)
    setCurrentUserImage(data.image)
    setCurrentUserInstruments(data.instruments)
  }

  function handleLogout () {
    setLoggedInStatus("NOT_LOGGED_IN")
    setCurrentUser({})
    setCurrentUserImage("")
  }

  useEffect(() => {
    checkLoginStatus();
    setLoading(false);
  }, []);

  const checkLoginStatus = () => {
    axios.get("/api/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged in status >>>>>", response.data);
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN")
          setCurrentUser(response.data.user)
          setCurrentUserImage(response.data.image)
          setCurrentUserInstruments(response.data.instruments)
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN")
          setCurrentUser({})
        }
    }).catch(error => {
      console.log("Login Error", error);
    })
  }


  return (
    <>
      {loading ? 
      (
        <div className="loading">
          <h3>LOADING</h3>
        </div>
      )
      : 
      (
    <Router>
      <div className="page-container">
        {loggedInStatus ===  "LOGGED_IN" ? 
          (<NavigationAfterLogin handleLogout={handleLogout}　loggedInStatus={loggedInStatus} currentUser={currentUser} />) 
          : (<NavigationBar />)
        } 
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path="/signup" element={<Signup handleLogin={handleLogin} loggedInStatus={loggedInStatus} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} loggedInStatus={loggedInStatus}/>} />
          <Route path="/events" element={<EventList />} />
          <Route path="/myprofile" element={<MyProfile loggedInStatus={loggedInStatus} currentUser={currentUser} currentUserImage={currentUserImage} currentUserInstruments={currentUserInstruments} />} />
          <Route path="/mysessions" element={<MySessionsList />} />
          <Route path="/session/new" element={<EventForm />} />
          <Route path="/favourites" element={<MyFavourites loggedInStatus={loggedInStatus} />} />

        </Routes>

        <div className="content-wrapper">
          <Footer />
        </div>

      </div>
    </Router>
      )}
    </>    
  );
}


export default App;