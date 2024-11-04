import React from 'react';
import './CSS/TestimonialCard.css';


interface TestimonialCardProps {
    backgroundColor: string;
    imageURL: string;
    clientName: string;
    testimonialText: string;
    rating: number;

}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ backgroundColor, clientName, testimonialText, rating, imageURL }) => {
    return (
        <div className="testimonial-card" style={{ backgroundColor }}>

            <div className="image-placeholder">
                <img src={imageURL} alt={`${clientName}'s testimonial`} className="client-image" />
            </div>
            <h3>{clientName}</h3>
            <p className="testimonial-text">{testimonialText}</p>
            <div className="rating">{'★'.repeat(rating)}</div>
            <button className="cta-button">See More</button>
        </div>
    );
};

export default TestimonialCard;
