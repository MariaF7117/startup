// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Schedule from './schedule/schedule';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Appointments</Link>
        <Link to="/schedule">Schedule Appointment</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AppointmentList />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
