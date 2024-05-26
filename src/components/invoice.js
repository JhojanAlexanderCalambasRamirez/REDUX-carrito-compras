import React from 'react';
import { useSelector } from 'react-redux';

const Invoice = () => {
  const invoice = useSelector((state) => state.invoice);

  if (!invoice) {
    return null;
  }

  return (
    <div className="invoice">
      <h2>Invoice</h2>
      {invoice.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <p>Total: ${invoice.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default Invoice;
