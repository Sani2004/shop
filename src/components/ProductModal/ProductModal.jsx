import React from 'react';
import { useCart } from '../../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const { addToCart, cartItems } = useCart();

  const itemInCart = cartItems.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAdd = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="product-modal-overlay">
      <div className="product-modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="price">₹{product.price.toLocaleString()}</p>

            {product.rating && (
              <div className="rating">
                ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
              </div>
            )}

            <p className="description">{product.description}</p>

            <button 
              className="add-to-cart"
              onClick={handleAdd}
            >
              {quantity > 0 ? `In Cart (${quantity})` : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
