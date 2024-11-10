function loadEditAppointment() {
    const editIndex = localStorage.getItem('editIndex');
    if (editIndex !== null) {
      const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const appointment = appointments[editIndex];
      
      if (appointment) {
        document.getElementById('name').value = appointment.name;
        document.getElementById('date').value = appointment.date;
        document.getElementById('time').value = appointment.time;
        document.getElementById('details').value = appointment.details;
      }
    }
  }
  
  function saveAppointment() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const details = document.getElementById('details').value;
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
    window.location.href = 'index.html';
  }
  
  window.onload = loadEditAppointment;
  