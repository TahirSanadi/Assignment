import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {productsData.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-bold">${product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
