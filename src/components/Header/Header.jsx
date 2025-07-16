import React from 'react';
import { Link } from 'react-scroll';
import { useCart } from '../../context/CartContext';
import { FiShoppingBag } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>StyleHub</Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="women" smooth={true} duration={500}>Women</Link>
          </li>
          <li>
            <Link to="men" smooth={true} duration={500}>Men</Link>
          </li>
          <li>
            <Link to="accessories" smooth={true} duration={500}>Accessories</Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500}>Why Us</Link>
          </li>
        </ul>
        
        <div className="shopping-cart">
          <FiShoppingBag className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;