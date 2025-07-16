import React from 'react';
import './Categories.css';

const Categories = ({ setActiveCategory }) => {
  const categories = [
    {
      id: 'women',
      title: "Women's Fashion",
      description: "Elegant ethnic wear, contemporary western styles, and trendy accessories",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 'men',
      title: "Men's Fashion",
      description: "Traditional kurtas, formal suits, and casual wear for the modern man",
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 'accessories',
      title: "Accessories",
      description: "Jewelry, handbags, watches and more to complete your look",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="categories-container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => setActiveCategory(category.id)}
            >
              <div 
                className="category-image" 
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="category-info">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <span className="shop-now-btn">Shop-Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;