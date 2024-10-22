
import React, { useState } from 'react';
import '../components/CSS/CompleteProfile.css'
import { Link, useNavigate } from 'react-router-dom';

const CompleteProfile: React.FC = () => {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const profileData = {
            name,
            contactNo,
            country,
            state,
            city,
            role,
        };



        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Profile completed successfully!');
            } else {
                alert(`Failed to complete profile: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred while completing the profile.');
            console.error('Error:', error);
        }

    };

    return (
        <div className="c-container">

            <div className='c-form-side'>
                <div className="c-form-container">
                    <h2>Complete Your Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNo">Contact No:</label>
                            <input
                                type="text"
                                id="contactNo"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Select Your Role:</label>
                            <div className='role-select'>
                                <Link to="/mate-details" className='role-button'>Mate</Link>
                                <Link to="/grandpalForm" className='role-button'>Grandpal</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompleteProfile;
