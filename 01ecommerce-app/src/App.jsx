import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './component/ProductList';
import Cart from './component/Cart';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">E-Commerce Shopping Cart</h1>
        <div className="flex justify-between mb-4">
          <Link to="/" className="text-blue-500">Home</Link>
          <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded">View Cart ({cartItems.length})</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
