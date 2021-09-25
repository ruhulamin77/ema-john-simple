import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const reducer = (previous, product)=> previous + product.price;
    // const total = cart.reduce((previous, product) => previous + product.price, 0);

    const shipping = total > 0 ? 20 : 0;
    const tax = (total + shipping) * 0.10
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h3 className="order-summary">Order Summary</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <h4>Total Price: ${total.toFixed(2)}</h4>
            <h5>Shipping Charge: ${shipping}</h5>
            <h5>Tax: ${tax.toFixed(2)}</h5>
            <h2 className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</h2>
            <div className="review-order-btn-container">
                <button className="review-order-btn">Review Order</button>
            </div>

        </div>
    );
};

export default Cart;