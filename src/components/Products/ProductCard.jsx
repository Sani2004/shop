import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import ProductModal from '../ProductModal/ProductModal';
import './Products.css';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const { addToCart, cartItems } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const qty = cartItems.find((i) => i.id === product.id)?.quantity || 0;

  const handleAdd = (e) => {
    e.stopPropagation();          // keep card‑click from opening modal
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    addToCart(product);
  };

  return (
    <>
      <div className="product-card" onClick={() => setOpen(true)}>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">₹{product.price.toLocaleString()}</p>

          <button className="add-to-cart" onClick={handleAdd}>
            {qty > 0 ? `In Cart (${qty})` : 'Add to Cart'}
          </button>
        </div>
      </div>

      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
