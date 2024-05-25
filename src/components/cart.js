// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
