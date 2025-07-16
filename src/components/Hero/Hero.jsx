import React from 'react';
import { Link } from 'react-scroll';
import heroVideo from '../../assets/fashion-video.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Elevate Your Style</h1>
        <p>Premium Fashion for the Modern Indian</p>
        <Link 
          to="categories" 
          smooth={true} 
          duration={500} 
          className="cta-button"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;