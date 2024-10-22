import React, { useState } from 'react';
import './CSS/Register.css'
import { Link } from 'react-router-dom';
import reg from '../assets/register1.jpg'
import logo from '../assets/logo2.png'

const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const registrationData = {
      email,
      password,
    };


    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      alert('An error occurred during registration.');
      console.error('Error:', error);
    }
  };
  return (


    <div className="r-container">


      <div className="r-image-side">
        <img src={reg} />
      </div>


      <div className="form-side">

        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link to='/completeProfile' className='button'>Register</Link>
          </form>
          <p className="login-link">
            Already registered? <Link to='/login'>Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register
