import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  // Fetch appointments from the backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/appointmentList');
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Cancel an appointment by index
  const cancelAppointment = async (index) => {
    try {
      const response = await fetch(`/api/schedule/${index}`, { method: 'DELETE' });
      if (response.ok) {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
        setAppointments(updatedAppointments);
      } else {
        alert('Failed to cancel the appointment.');
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

  const editAppointment = (index) => {
    localStorage.setItem('editIndex', index);
    navigate('/schedule');
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
