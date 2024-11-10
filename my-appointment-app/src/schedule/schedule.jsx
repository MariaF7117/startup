// src/components/Schedule.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push({ name, date, time, details });
    localStorage.setItem('appointments', JSON.stringify(appointments));
    navigate('/'); // Go back to appointment list after saving
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <textarea
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button onClick={handleSave}>Save Appointment</button>
    </div>
  );
}

export default Schedule;
