import React from 'react'
import img2 from '../assets/home2.jpg';
import img3 from '../assets/home3.jpg';
import img4 from '../assets/home4.jpg';
import img5 from '../assets/home5.png';
import './CSS/Services.css'

function Services() {
    return (
        <div>
            <h1>Our Services</h1>
            <div className="section-1">
                <div className="image-wrapper-1">
                    <img className="image" src={img2} alt="Companion and elderly person" />
                </div>
                <div className="text-wrapper-1">
                    <h1 className="heading">Experience the Delight of Quality Time</h1>
                    <p className="description">Our Goodfellows are always ready to listen with a caring heart.</p>
                </div>
            </div>

            <div className="section-1">
                <div className="text-wrapper-1">
                    <h1 className="heading">Tech-savvy youth bridge the digital divide</h1>
                    <p className="description">Our Young Mates are here to guide you through the digital world.</p>
                </div>
                <div className="image-wrapper-1">
                    <img className="image" src={img3} alt="Companion and elderly person" />
                </div>
            </div>

            <div className="section-1">
                <div className="image-wrapper-1">
                    <img className="image" src={img4} alt="Companion and elderly person" />
                </div>
                <div className="text-wrapper-1">
                    <h1 className="heading">Enjoy the company while you walk</h1>
                    <p className="description">Let's explore together, whether it's for a casual stroll or a specific destination.</p>
                </div>
            </div>

            <div className="section-1">
                <div className="text-wrapper-1">
                    <h1 className="heading">Need help with daily errands?</h1>
                    <p className="description">Our Young Mates are here to assist you with shopping, appointments, and more.</p>
                </div>
                <div className="image-wrapper-1">
                    <img className="image" src={img5} alt="Companion and elderly person" />
                </div>
            </div>
        </div>
    )
}

export default Services