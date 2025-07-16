import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The quality of the silk saree exceeded my expectations. Perfect for weddings!",
      author: "Priya Sharma, Mumbai"
    },
    {
      quote: "Fast delivery and excellent customer service. Will definitely shop again!",
      author: "Rahul Verma, Delhi"
    },
    {
      quote: "Love the unique designs that I couldn't find anywhere else. Highly recommended!",
      author: "Neha Patel, Bangalore"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <h4 className="testimonial-author">- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;