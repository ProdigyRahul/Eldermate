import React from 'react'
import ev1 from '../assets/Event 1.jpg'
import ev2 from '../assets/Event 2.jpg'
import ev3 from '../assets/Event 3.jpg'
import './CSS/Events.css'

function Events() {
    return (
        <div>
            <h1>Events</h1>
            <div className="event-container">
                <div className="section-2">
                    <div className="image-wrapper-1">
                        <img className="image" src={ev1} alt="Companion and elderly person" />
                    </div>
                    <div className="text-wrapper-2">
                        <h1 className="heading">Dance to the Rhythm of Joyful Moments</h1>
                        <p className="description">Let the music lift your spirits and the company fill your heart, as we create an evening of song and dance.</p>
                    </div>
                </div>

                <div className="section-1">
                    <div className="text-wrapper-2">
                        <h1 className="heading">Embrace the Outdoors, One Step at a Time</h1>
                        <p className="description">Join us for a refreshing trek and picnic, where nature’s beauty meets delightful company.</p>
                    </div>
                    <div className="image-wrapper-2">
                        <img className="image" src={ev2} alt="Companion and elderly person" />
                    </div>
                </div>

                <div className="section-1">
                    <div className="image-wrapper-2">
                        <img className="image" src={ev3} alt="Companion and elderly person" />
                    </div>
                    <div className="text-wrapper-2">
                        <h1 className="heading">Unleash Your Creativity, One Brushstroke at a Time</h1>
                        <p className="description">Discover the joy of art with fellow creators, crafting memories and masterpieces alike.Join us for a refreshing trek and picnic, where nature’s beauty meets delightful company.</p>
                    </div>
                </div>

                {/* <div className="section-1">
                    <div className="text-wrapper-1">
                        <h1 className="heading">Need help with daily errands?</h1>
                        <p className="description">Our Young Mates are here to assist you with shopping, appointments, and more.</p>
                    </div>
                    <div className="image-wrapper-1">
                        <img className="image" src={img5} alt="Companion and elderly person" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Events