// src/App.js
import React from 'react';
import Product from './components/product';
import Cart from './components/cart';

const App = () => {
    const sampleProduct = {
        id: 1,
        name: 'Sample Product',
        price: '$10'
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <Product product={sampleProduct} />
            <Cart />
        </div>
    );
};

export default App;
