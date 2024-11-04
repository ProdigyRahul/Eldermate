import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/home1.jpg';
import img2 from '../assets/home2.jpg';
import img3 from '../assets/home3.jpg';
import img4 from '../assets/home4.jpg';
import img5 from '../assets/home5.png';
import rev1 from '../assets/rev1.png';
import rev2 from '../assets/rev2.png';
import rev3 from '../assets/rev3.png';
import logo from '../assets/logo2.png';
import './CSS/Home.css';

const Home = () => {
  return (
    <section className="section">
      <img className='logoimage' src={logo} alt="ElderMate Logo" />

      <nav className="navbar">
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/services'>SERVICES</Link></li>
          <li><Link to='/'>CONNECTIONS</Link></li>
          <li><Link to='/events'>EVENTS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>

      <div className="HeaderSection">
        <div className="HeaderImageWrapper">
          <img className="header-image" src={img1} alt="Companion and elderly person" />
        </div>
        <div className="HeaderText">
          <h1 className="heading">Everything Grandkids Do!</h1>
          <p className="description">Spirited, empathetic youth companions for the elderly.</p>
          <Link to="/register" className="button">Join the Trial!</Link>
        </div>
      </div>

      <div className="section1">
        <div className="text-cont">
          <p className="description">
            We are a team of young graduates with a deep affection for the elderly, dedicated to building meaningful relationships with our "Grandpals."
          </p>
        </div>
      </div>

      <div className="section1">
        <div className="image-wrapper">
          <img className="image" src={img2} alt="Companion and elderly person" />
        </div>
        <div className="text-wrapper">
          <h1 className="heading">Experience the Delight of Quality Time</h1>
          <p className="description">Our Goodfellows are always ready to listen with a caring heart.</p>
        </div>
      </div>

      <div className="section1">
        <div className="text-wrapper">
          <h1 className="heading">Tech-savvy youth bridge the digital divide</h1>
          <p className="description">Our Young Mates are here to guide you through the digital world.</p>
        </div>
        <div className="image-wrapper">
          <img className="image" src={img3} alt="Companion and elderly person" />
        </div>
      </div>

      <div className="section1">
        <div className="image-wrapper">
          <img className="image" src={img4} alt="Companion and elderly person" />
        </div>
        <div className="text-wrapper">
          <h1 className="heading">Enjoy the company while you walk</h1>
          <p className="description">Let's explore together, whether it's for a casual stroll or a specific destination.</p>
        </div>
      </div>

      <div className="section1">
        <div className="text-wrapper">
          <h1 className="heading">Need help with daily errands?</h1>
          <p className="description">Our Young Mates are here to assist you with shopping, appointments, and more.</p>
        </div>
        <div className="image-wrapper">
          <img className="image" src={img5} alt="Companion and elderly person" />
        </div>
      </div>

      <h1 className="heading">Discover Grandpal's tales.</h1>

      <div className="reviewContainer">
        <div className="review">
          <div className="image-wrapper">
            <img className="image" src={rev1} alt="Review" />
          </div>
          <p className="review-text">
            Laurentine Castelino is grateful to ElderMate for assisting with daily groceries.
          </p>
        </div>

        <div className="review">
          <div className="image-wrapper">
            <img className="image" src={rev2} alt="Review" />
          </div>
          <p className="review-text">
            ElderMate’s mate taught me how to shop online, making life easier.
          </p>
        </div>

        <div className="review">
          <div className="image-wrapper">
            <img className="image" src={rev3} alt="Review" />
          </div>
          <p className="review-text">
            My ElderMate companion has been a wonderful source of company and support. We go for walks together and have the best conversations. It's like having a friend to share my days with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
