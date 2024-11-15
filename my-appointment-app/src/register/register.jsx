import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert('Username already exists! Please choose a different one.');
      return;
    }

    // Add the new user to the list and save in localStorage
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please log in.');
    navigate('/'); // Navigate to the login page
  };

  return (
    <main>
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Register</button>
        </form>
        <br />
        <button onClick={() => navigate('/')}>Back to Login</button>
      </div>
    </main>
  );
};

export default Register;
