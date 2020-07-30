import React from 'react';
import './Cart.css'
import Auth, { useAuth } from '../LogIn/UseAuth';
const Cart = (props) => {

    const auth = useAuth;

    let cartProducts = props.cartProducts
    // makeNun2digit function make two digits after .
    const makeNun2digit = num => Number(num.toFixed(2))

    // take one by one cartProducts.price  && conditionally add in productPrice
    let productPrice = 0
    for (let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        if (product.quantity) {
            productPrice = productPrice + product.price * product.quantity
        } else {
            productPrice = productPrice + product.price
        }
    }

    // this make shippingCost for the productPrice
    let shippingCost = 0;
    if (productPrice > 100) {
        shippingCost = 0
    }
    else if (productPrice > 80) {
        shippingCost = 8
    }
    else if (productPrice > 40) {
        shippingCost = 16
    }


    const vat = productPrice / 10
    // sam of all cost is grandTotal
    const grandTotal = productPrice + vat + shippingCost

    // conditionally set order product length
    let countOrderItem = 0;
    cartProducts.forEach(product => {
        if (product.quantity) {
            countOrderItem = countOrderItem + product.quantity
        } else {
            countOrderItem = cartProducts.length
        }
    });





    return (
        <div className="cartContainer">
            <h3 className="textCenter">Order Summary</h3>
            <h4 className="textCenter">Item Ordered : {countOrderItem}</h4>

            <p><samp>Product Price :</samp> <samp className="textRight">{makeNun2digit(productPrice)}</samp></p>
            <p><samp>Shipping cost :</samp> <samp className="textRight">{makeNun2digit(shippingCost)}</samp> </p>
            <p><samp>Vat : </samp><samp className="textRight">{makeNun2digit(vat)}</samp></p>
            <hr></hr>
            <p><samp>Total Price :</samp> <samp className="textRight">{makeNun2digit(grandTotal)}</samp></p>
            {
                props.children
            }


        </div>
    );
};

export default Cart;