import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0
    for(let i=0; i<cart.length; i++){
        const product = cart[i]
        total = total + product.price;
    }
    let shipping =0;
    if (total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }else if(total < 15){
        shipping = 12.48;
    }
    const tax = (total / 6).toFixed(2);
    return (
        <div>
            <h4>This is Cart</h4>
            <h5>Order's Summery: {cart.length}</h5>
            <h5>Total: {(total).toFixed(2)}</h5>
             <h5>Tax + Vat: {tax}</h5>
            <h6>Shipping: {shipping}</h6>
             <h6>Total : {total + shipping}</h6>
        </div>
    );
};

export default Cart;