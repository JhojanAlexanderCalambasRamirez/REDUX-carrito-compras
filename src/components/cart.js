import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { generateInvoice } from '../utils/generateInvoice';
import Modal from './Modal';


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  if (!Array.isArray(cart)) {
    return null; // or some fallback UI
  }

  const handleGenerateInvoice = () => {
    const invoice = generateInvoice(cart);
    setInvoiceDetails(invoice);
    setShowModal(true);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button onClick={handleGenerateInvoice}>Generate Invoice</button>
      )}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Invoice Details</h2>
        <ul>
          {invoiceDetails && invoiceDetails.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Cart;
