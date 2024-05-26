import React from 'react';
import Products from './components/product';
import Cart from './components/cart';
import Invoice from './components/invoice';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Online Store</h1>
      </header>
      <main className="main-content">
        <Products />
        <Cart />
        <Invoice />
      </main>
    </div>
  );
};

export default App;
