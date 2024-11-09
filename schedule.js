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
  