import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignUp from './SignUp';
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUp />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
