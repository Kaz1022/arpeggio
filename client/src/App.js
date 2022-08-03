import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import EventList from './components/Events/EventList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home/Main';
import Dashboard from './components/Dashboard';
import './App.scss';

function App () {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [currentUser, setCurrentUser] = useState({})

  function handleLogin (user) {
    setLoggedInStatus("LOGGED_IN")
    setCurrentUser(user)
  }


  return (
    <Router>
      <div className="page-container">
        <NavigationBar />
        
        <Routes>
          <Route exact path ="/" element={<Home loggedInStatus={loggedInStatus}/>} />
          <Route exact path ="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
          <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
          <Route path="/login" element={<Login />} />
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