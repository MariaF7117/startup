import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import '../App.css';

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

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
    navigate('/schedule');
  };

  const cancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    updateAppointments(updatedAppointments);
  };

  return (
    <div>
      <div className="content">
        <h1>Welcome to your home page Maria Feist</h1>
      </div>

      <div className="container">
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
      </div>
    </div>
  );
};

export default AppointmentList;
