import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { cartCount, toggleCart } = useCart();

  return (
    <button onClick={toggleCart} className="relative">
      <FaShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
