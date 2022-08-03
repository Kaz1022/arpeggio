import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import EventList from './components/Events/EventList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home/Main';
import Dashboard from './components/Dashboard';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="page-container">
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/signup" element={<Signup />} />
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