import { useCart } from '../../context/CartContext';

const CartSidebar = () => {
  const {
    cartItems,
    cartTotal,
    isOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50">
      <header className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart}>✕</button>
      </header>

      {cartItems.length === 0 ? (
        <p className="mt-8 text-center text-gray-500">Cart is empty</p>
      ) : (
        <ul className="space-y-4 overflow-y-auto h-[60vh] pr-1">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <span className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  –
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2">
                  ⓧ
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-4 border-t pt-3">
        <div className="flex justify-between mb-3">
          <span>Total</span>
          <span className="font-semibold">₹{cartTotal}</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded">
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default CartSidebar;
