// CompleteProfile.js
import React, { useState } from 'react';
import '../components/CSS/MateForm.css'
import { Link, useNavigate } from 'react-router-dom';

const MateForm: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [reason, setReason] = useState('');
    const [availability, setAvailability] = useState('');
    const [typeOfEngagement, setTypeOfEngagement] = useState('');
    const [referral, setReferral] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const mateData = {
            name,
            age,
            profession,
            reason,
            availability,
            referral,
            skills,
        };



        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mateData),
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
        <div className="m-container">
            <div className='m-form-side'>
                <div className="form-container">
                    <h2>Mate's Info</h2>
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
                            <label htmlFor="age">Age:</label>
                            <input
                                type="text"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profession">Profession:</label>
                            <select
                                id="profession"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                required
                            >
                                <option value="">Select Profession</option>
                                <option value="Student">Student</option>
                                <option value="Business">Business</option>
                                <option value="Working">Working</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason">Reason for providing assistance:</label>
                            <input
                                type="text"
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="availability">Availability:</label>
                            <input
                                type="text"
                                id="availability"
                                value={availability}
                                onChange={(e) => setAvailability(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="typeOfEngagement">Type of Engagement:</label>
                            <select
                                id="typeOfEngagement"
                                value={typeOfEngagement}
                                onChange={(e) => setTypeOfEngagement(e.target.value)}
                                required
                            >
                                <option value="">Select Engagement Type</option>
                                <option value="One-One">One-One</option>
                                <option value="Group Activities">Group Activities</option>
                                <option value="Virtual Support">Virtual Support</option>
                                <option value="As Needed">As Needed</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="referral">How did you hear about us?</label>
                            <input
                                type="text"
                                id="referral"
                                value={referral}
                                onChange={(e) => setReferral(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills">Skills and Interests:</label>
                            <input
                                type="text"
                                id="skills"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MateForm;
