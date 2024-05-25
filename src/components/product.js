// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
};

export default Product;
