import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Reaction from './components/Reaction';
import NavBar from './components/NavBar';
import EventCard from './components/EventCard';
import reportWebVitals from './reportWebVitals';


import NoPage from './views/NoPage';



export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/event" element={<EventCard />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <NavBar/> <div style={{ marginTop: '11vh' }}></div>
  <Routing />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
