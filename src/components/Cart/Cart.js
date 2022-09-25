import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        console.log(product)
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping = product.shipping * product.quantity;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button><p>Clear Cart</p></button>
            <button><p>Review Order</p></button>
        </div>
    );
};

export default Cart;