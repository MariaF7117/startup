function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = appointments.length === 0 ? "<li>No appointments scheduled</li>" : '';
    
    appointments.forEach((appt, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${appt.name}</strong> - ${appt.date} at ${appt.time}<br>
        <em>${appt.details}</em><br>
        <button onclick="editAppointment(${index})">Edit</button>
        <button onclick="cancelAppointment(${index})">Cancel</button>
      `;
      appointmentsList.appendChild(li);
    });
  }
  
  function editAppointment(index) {
    localStorage.setItem('editIndex', index);
    window.location.href = 'schedule.html';
  }
  

  window.onload = loadAppointments;
  