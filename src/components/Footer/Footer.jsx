import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-logo">StyleHub</h3>
          <p className="footer-text">Bringing you the best shopping experience with elegance and ease.</p>
          
          <div className="footer-contact">
            <p><i className="fas fa-envelope"></i> support@stylehub.com</p>
            <p><i className="fas fa-phone"></i> +91-9876543210</p>
          </div>
          
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Returns & Exchanges</a>
          </div>
          
          <p className="footer-copyright">&copy; {new Date().getFullYear()} StyleHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;