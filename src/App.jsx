import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('women');
  
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Hero />
        <Categories setActiveCategory={setActiveCategory} />
        <Products activeCategory={activeCategory} />
        <Features />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;