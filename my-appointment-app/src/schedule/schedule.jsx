import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Schedule = () => {
  //const [userName, {userName}] 
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const saveAppointment = async () => {
    const newAppointment = { name, date, time, details };
  
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAppointment),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Appointment scheduled successfully!');
        console.log('Updated schedule:', result.schedule);
        navigate('/appointmentList');
      } else {
        const errorData = await response.json();
        console.error('Failed to schedule appointment:', errorData.message);
        alert(`Failed to schedule appointment: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Error scheduling appointment.');
    }
  };

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
