import React from 'react';
import { useCart } from '../../context/CartContext';
import './cart.css';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart} />
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-sidebar__header">
          <h2>Your Bag</h2>
          <button className="cart-sidebar__close" onClick={toggleCart} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__body">
          {cartItems.length === 0 ? (
            <div className="cart-sidebar__empty">
              <p>Your bag is empty.</p>
              <button className="btn-primary" onClick={toggleCart}>Continue Shopping</button>
            </div>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__emoji">{item.emoji}</div>
                  <div className="cart-item__info">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__price">${item.price.toLocaleString()}</p>
                    
                    <div className="cart-item__controls">
                      <div className="cart-item__qty">
                        <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__total">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <button className="btn-primary cart-sidebar__checkout">Check Out</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
