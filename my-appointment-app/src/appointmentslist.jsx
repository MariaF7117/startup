// src/components/AppointmentList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const cancelAppointment = (index) => {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    setAppointments(appointments);
  };

  return (
    <div>
      <h1>Your Appointments</h1>
      <button>
        <Link to="/schedule">Schedule Appointment</Link>
      </button>
      <ul>
        {appointments.length === 0 ? (
          <li>No appointments scheduled</li>
        ) : (
          appointments.map((appt, index) => (
            <li key={index}>
              <strong>{appt.name}</strong> - {appt.date} at {appt.time}
              <br />
              <em>{appt.details}</em>
              <br />
              <button onClick={() => cancelAppointment(index)}>Cancel</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AppointmentList;
