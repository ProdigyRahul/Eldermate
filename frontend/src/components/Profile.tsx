import React, { useEffect, useState } from 'react';
import './ProfileScreen.css';

// Define TypeScript interface for profile data
interface ProfileData {
    name: string;
    age: number;
    livingStatus: string;
    diseases: string;
    family: string;
    contactNo: string;
}

const Profile: React.FC = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/profile'); // Replace with actual API
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    if (!profileData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="profile-container">
            <nav className="sidebar">
                <ul>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">My Events</a></li>
                    <li><a href="#">My Connections</a></li>
                    <li><a href="#">Rating and Feedback</a></li>
                    <li><a href="#">Activity Log</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>

            <div className="profile-content">
                <h2>My Profile</h2>
                <form className="profile-form">
                    <label>
                        Name:
                        <input type="text" value={profileData.name} readOnly />
                    </label>
                    <label>
                        Age:
                        <input type="number" value={profileData.age} readOnly />
                    </label>
                    <label>
                        Living Status:
                        <input type="text" value={profileData.livingStatus} readOnly />
                    </label>
                    <label>
                        Diseases:
                        <input type="text" value={profileData.diseases} readOnly />
                    </label>
                    <label>
                        Family:
                        <input type="text" value={profileData.family} readOnly />
                    </label>
                    <label>
                        Contact No:
                        <input type="text" value={profileData.contactNo} readOnly />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Profile;
