import React, { useEffect, useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Login from './login/login.jsx'
import Schedule from './schedule/schedule.jsx';
import Register from './register/register.jsx'
import About from './about/about.jsx';
import AppointmentList from './appointmentList/appointmentList.jsx'
import './App.css';

const Home = () => {
  const [appointments, setAppointments] = useState([]);
  //const navigate = useNavigate();

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  // Save updated appointments to localStorage
  const updateAppointments = (updatedAppointments) => {
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const editAppointment = (index) => {
    localStorage.setItem('editIndex', index);
 //   navigate('/schedule'); // Redirect to the schedule page for editing
  };

  const cancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    updateAppointments(updatedAppointments);
  };

  return (
    <BrowserRouter>
    <div>
      <nav>
        <NavLink to="/">Login</NavLink> | 
        <NavLink to="/schedule">Schedule Appointment</NavLink> | 
        <NavLink to="/appointmentList">Appointments</NavLink> | 
        <NavLink to="/about">About</NavLink> |
        <NavLink to="/register">Register</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointmentList" element={<AppointmentList />} />
        <Route path='/about' element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <div className="content">
        <h1>Welcome to your home page Maria Feist</h1>
      </div> */}

      {/* { <div className="container">
        <h1>Your Appointments</h1>
        <button onClick={() => navigate('/schedule')}>Schedule Appointment</button>
        <ul id="appointmentsList">
          {appointments.length === 0 ? (
            <li>No appointments scheduled</li>
          ) : (
            appointments.map((appt, index) => (
              <li key={index}>
                <strong>{appt.name}</strong> - {appt.date} at {appt.time}
                <br />
                <em>{appt.details}</em>
                <br />
                <button onClick={() => editAppointment(index)}>Edit</button>
                <button onClick={() => cancelAppointment(index)}>Cancel</button>
              </li>
            ))
          )}
        </ul>
      </div> } */}

      <footer>
        <a href="https://github.com/MariaF7117/startup" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </footer>
    </div>
    </BrowserRouter>
  );
};

export default Home;
