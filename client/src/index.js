import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './components/SignUp';
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<Signup />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
