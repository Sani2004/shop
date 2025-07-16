import React from 'react';
import { FaTruck, FaRupeeSign, FaHeadset, FaLock } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="feature-icon" />,
      title: "Fast Delivery",
      description: "Get your orders delivered at lightning speed across India."
    },
    {
      icon: <FaRupeeSign className="feature-icon" />,
      title: "Best Prices",
      description: "Unbeatable prices on trendy and premium fashion items."
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "24/7 Support",
      description: "Our support team is here to assist you anytime, any day."
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: "Secure Payment",
      description: "Shop confidently with our fully secured payment gateways."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">Why Shop With Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;