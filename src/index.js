import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Event from './pages/event'
import AboutUs from './components/aboutUs';
import Ragister from './pages/registration';
import OurTeam from './pages/ourTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/register" element={<Ragister />} />
        <Route path="/ourTeam" element={<OurTeam />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
