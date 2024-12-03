import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Schedule = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  // Load existing appointment details for editing, if any
  useEffect(() => {
    const editIndex = localStorage.getItem('editIndex');
    if (editIndex !== null) {
      const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const appointment = appointments[editIndex];
      if (appointment) {
        setName(appointment.name);
        setDate(appointment.date);
        setTime(appointment.time);
        setDetails(appointment.details);
      }
    }
  }, []);

  const saveAppointment = () => {
    const newAppointment = { name, date, time, details };
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const editIndex = localStorage.getItem('editIndex');

    if (editIndex !== null) {
      appointments[editIndex] = newAppointment;
      localStorage.removeItem('editIndex');
    } else {
      appointments.push(newAppointment);
    }

    localStorage.setItem('appointments', JSON.stringify(appointments));
    alert('Appointment saved!');
    navigate('/appointmentList/'); // Replace with your dashboard or appointments page route
  };

//Save appointment using the /api/schedule endpoint
// const saveAppointment = async () => {
//   const newAppointment = { name, date, time, details };

//   try {
//     const response = await fetch('/api/schedule', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newAppointment),
//     });

//     if (response.ok) {
//       const schedule = await response.json();
//       alert('Appointment saved!');
//       console.log('Updated schedule:', schedule);
//       navigate('../appointmentList');
//     } else {
//       console.error('Failed to save appointment');
//       alert('Failed to save appointment.');
//     }
//   } catch (error) {
//     console.error('Error saving appointment:', error);
//     alert('Error saving appointment.');
//   }
// };

return (
  <main>
    <div className="container">
      <h1>Schedule an Appointment</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label htmlFor="details">Details:</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <button type="button" onClick={saveAppointment}>
          Save Appointment
        </button>
        <button type="button" onClick={() => navigate('/appointmentList')}>
          Back to Appointments
        </button>
      </form>
    </div>
  </main>
);
};


export default Schedule;
