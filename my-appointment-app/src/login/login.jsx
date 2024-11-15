import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any registered user
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert('Login successful!');
      // Redirect to a protected page or dashboard
      navigate('/'); // Update path as needed
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <main>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        <br />
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </main>
  );
};

export default Login;
