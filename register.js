function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if the user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);
  
    if (userExists) {
      alert('Username already exists! Please choose a different one.');
      return;
    }
  
    // Add the new user to the list and save in localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
  }
  