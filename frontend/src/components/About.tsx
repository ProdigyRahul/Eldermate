import React from 'react';
import './CSS/About.css';
import rahul from '../assets/Rahul.png'
import melita from '../assets/Melita.png'

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <div className="mission-box">
                    <p>
                        At ElderMate, we believe that no one should feel alone, especially our elders. We're committed to building meaningful relationships between seniors and compassionate individuals who provide companionship, assistance, and emotional support.
                    </p>
                </div>
            </section>

            <section className="what-we-do-section">
                <h2>What we do?</h2>
                <div className="what-we-do-box">
                    <p>
                        Our platform connects young people and volunteers with the elderly to foster a sense of family, making sure that seniors feel loved, valued, and supported throughout their golden years.
                    </p>
                </div>
            </section>

            <section className="founders-section">
                <h2>Founders</h2>
                <div className="founders-container">
                    <div className="founder">
                        <img src={rahul} alt="Rahul Mistry" className="founder-image" />
                        <h3>Rahul Mistry</h3>
                        <p>I am just a Tech!</p>
                    </div>
                    <div className="founder">
                        <img src={melita} alt="Melita Castelino" className="founder-image" />
                        <h3>Melita Castelino</h3>
                        <p>Hello</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
