'use client'
import React, { useState } from 'react';

const StockForm = () => {
  const [stockName, setStockName] = useState('');
  const [stockPrice, setStockPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const addStock = async (body) => {
    const data = JSON.stringify(body);
    console.log('DATA>>>', data);
    try {
      await fetch('/api/product', {
        method: 'POST',
        body: data,
      });
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Data could not be saved', error.response.message);
    }
  }

  const handleAddStock = () => {
    if (stockName && stockPrice && stockQuantity) {
      addStock({ name: stockName, price: parseFloat(stockPrice), quantity: stockQuantity });
      setStockName('');
      setStockPrice('');
      setStockQuantity('');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
      <input
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Stock Name"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
      />
      <input
        className="w-full mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        type="number"
        placeholder="Stock Price"
        value={stockPrice}
        onChange={(e) => setStockPrice(e.target.value)}
      />
      <input
        className="w-full mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        type="number"
        placeholder="Stock Quantity"
        value={stockQuantity}
        onChange={(e) => setStockQuantity(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleAddStock}
      >
        Add Stock
      </button>
    </div>
  );
};

export default StockForm;
