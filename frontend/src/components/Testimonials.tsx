import React from 'react';
import TestimonialCard from './TestimonialCard';
import './CSS/Testimonials.css';
import rev1 from '../assets/rev1.png';
import rev2 from '../assets/rev2.png';
import rev3 from '../assets/rev3.png';

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            backgroundColor: '#ccd5co',
            clientName: 'Laurentine Castelino',
            testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            rating: 5,
            imageURL: rev1,
        },
        {
            backgroundColor: '#ccd5co',
            clientName: 'XYZ Mistry',
            testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            rating: 4,
            imageURL: rev2,
        },
        {
            backgroundColor: '#ccd5co',
            clientName: 'Mr and Mrs Mehta',
            testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            rating: 5,
            imageURL: rev3,
        },
    ];

    return (
        <div>
            <h1>Discover Grandpal's Tales</h1><br />
            <div className="testimonial-container">

                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        backgroundColor={testimonial.backgroundColor}
                        clientName={testimonial.clientName}
                        testimonialText={testimonial.testimonialText}
                        rating={testimonial.rating}
                        imageURL={testimonial.imageURL}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
