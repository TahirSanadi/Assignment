import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="border px-2 py-1 w-16"
                />
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold">
            <p>Total: ${total}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
