import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Login from './login/login.jsx';
import {AuthState} from './login/authState.js';
import Schedule from './schedule/schedule.jsx';
import Register from './register/register.jsx'
import About from './about/about.jsx';
import AppointmentList from './appointmentList/appointmentList.jsx'
import './App.css';

const Home = () => {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [appointments, setAppointments] = useState([]);
 // const navigate = useNavigate();

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
    navigate('/schedule'); // Redirect to the schedule page for editing
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
        {authState === AuthState.Authenticated && (
        <NavLink to="/schedule">Schedule Appointment</NavLink>  )} |
        {authState === AuthState.Authenticated && (
        <NavLink to="/appointmentList">Appointments</NavLink> )} |
        {authState === AuthState.Authenticated && (
        <NavLink to="/about">About</NavLink>  )} |
        {authState === AuthState.Authenticated && (
        <NavLink to="/register">Register</NavLink> )} |
      </nav>
      
      <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointmentList" element={<AppointmentList />} />
        <Route path='/about' element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>

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
