import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './components/SignUp';
import EventList from './components/Events/EventList';
import './App.scss'
import NavigationBar from './components/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
  <NavigationBar/>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/events" element={<EventList />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
