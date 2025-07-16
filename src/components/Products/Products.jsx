import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ProductModal from '../ProductModal/ProductModal';
import './Products.css';

const Products = ({ activeCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const categoryProducts = {
          women: [
            {
              id: 1,
              title: "Silk Saree with Blouse",
              price: 2499,
              description: "Handwoven Banarasi silk saree with matching blouse piece",
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              rating: { rate: 4.5, count: 120 }
            },
            {
              id: 2,
              title: "Anarkali Suit Set",
              price: 1799,
              description: "Floral printed Anarkali suit with dupatta",
              image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
              rating: { rate: 4.2, count: 85 }
            },
            {
              id: 3,
              title: "Designer Lehenga",
              price: 5999,
              description: "Heavy embroidered lehenga for weddings and special occasions",
              image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
              rating: { rate: 4.8, count: 65 }
            }
          ],
          men: [
            {
              id: 4,
              title: "Cotton Kurta Set",
              price: 1499,
              description: "Comfortable cotton kurta with pyjama and dupatta",
              image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
              rating: { rate: 4.3, count: 92 }
            },
            {
              id: 5,
              title: "Formal Suit",
              price: 3999,
              description: "Premium wool blend suit for formal occasions",
              image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              rating: { rate: 4.6, count: 78 }
            },
            {
              id: 6,
              title: "Casual Shirt & Jeans",
              price: 1999,
              description: "Stylish casual wear combination for everyday use",
              image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
              rating: { rate: 4.1, count: 110 }
            }
          ],
          accessories: [
            {
              id: 7,
              title: "Pearl Necklace Set",
              price: 2999,
              description: "Elegant pearl necklace with matching earrings",
              image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              rating: { rate: 4.7, count: 56 }
            },
            {
              id: 8,
              title: "Leather Handbag",
              price: 2499,
              description: "Premium leather handbag with multiple compartments",
              image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
              rating: { rate: 4.4, count: 72 }
            },
            {
              id: 9,
              title: "Designer Watch",
              price: 3499,
              description: "Luxury analog watch with leather strap",
              image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
              rating: { rate: 4.9, count: 48 }
            }
          ]
        };
        
      
        setTimeout(() => {
          setProducts(categoryProducts[activeCategory] || []);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="products-section" id={activeCategory}>
      <div className="products-container">
        <h2 className="section-title">
          {activeCategory === 'women' ? "Women's Collection" : 
           activeCategory === 'men' ? "Men's Collection" : 
           "Accessories"}
        </h2>
        
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-image" 
                  style={{ backgroundImage: `url(${product.image})` }}
                  onClick={() => handleProductClick(product)}
                ></div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">₹{product.price.toLocaleString()}</p>
                  <button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default Products;