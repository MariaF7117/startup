function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the entered credentials match any registered user
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      alert('Login successful!');
      // Redirect to a protected page or dashboard
      window.location.href = '../index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  