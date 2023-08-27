import React from 'react';

const StockTable = ({ stocks }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Stock Table</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="p-2">{stock.name}</td>
              <td className="p-2">{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
