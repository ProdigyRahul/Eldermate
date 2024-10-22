// CompleteProfile.js
import React, { useState } from 'react';
import '../components/CSS/GrandpalForm.css'
import { Link, useNavigate } from 'react-router-dom';

const GrandpalForm: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [status, setStatus] = useState('');
    const [disease, setDisease] = useState('');
    const [reason, setReason] = useState('');
    const [children, setChildren] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const mateData = {
            name,
            age,
            status,
            disease,
            reason,
            children
        };


        /*
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
        */
    };

    return (
        <div className="g-container">
            <div className='g-form-side'>
                <div className="form-container">
                    <h2>Grandpal's Info</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name of the Grandpal:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age of the Grandpal:</label>
                            <input
                                type="text"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">What is your current status?</label>
                            <input
                                type="text"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="disease">Does the grandpal have any of the following?</label>
                            <select
                                className='select-disease'
                                id="disease"
                                value={disease}
                                onChange={(e) => setDisease(e.target.value)}
                                required>
                                <option value="">Select</option>
                                <option value="Alzheimer's">Alzheimer's</option>
                                <option value="Parkinson's">Parkinson's</option>
                                <option value="Dementia">Dementia</option>
                                <option value="Any other neurological disease">Any other neurological disease</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason">Why do you think they would need a Goodlfellow?
                            </label>
                            <input
                                type="text"
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="children">Do they have sons and daughters? If yes please provide details</label>
                            <input
                                type="text"
                                id="children"
                                value={children}
                                onChange={(e) => setChildren(e.target.value)}
                                required
                            />
                        </div>
                        <Link to='/' className='button'>Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GrandpalForm;
