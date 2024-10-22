import React, { useState } from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom';
import log from '../assets/Login.png';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const loginData = {
            email,
            password,
        };


        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login successful!');
            } else {
                alert(`Login failed: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred during login.');
            console.error('Error:', error);
        }
    };
    return (
        <div className="l-container">

            <div className="image-side">
                <img src={log} />
            </div>


            <div className="form-side">
                <div className="login-container">
                    <h2>Login</h2>
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

                        <Link to='/' className='button'>Login</Link>
                    </form>
                    <p className="login-link">
                        New to ElderMate? <Link to='/register'>Register Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login
