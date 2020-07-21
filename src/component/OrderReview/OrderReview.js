import React, { useState, useEffect } from 'react';
import './OrderReview.css'
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    // in this useState i store OrderProduct those take form localStorage by useEffect
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        // take data form localStorage by getDatabaseCart() 
        const products = getDatabaseCart()
        let productKey = Object.keys(products);
        let orderProduct = productKey.map(key => {
            let product = fakeData.find(pd => pd.key === key);
            product.quantity = products[key] // add count value in every OrderReview Products
            return product
        })
        setOrderProducts(orderProduct);
    }, [])

    // this function handel remove product form ReviewItem
    function removeItemFormReview(key) {
        const newOrderProduct = orderProducts.filter(pd => pd.key !== key)
        setOrderProducts(newOrderProduct);//add update value after remove OrderProduct
        removeFromDatabaseCart(key)//this remove product key for localStorage
    }


    return (
        <div className="container">
            <div className="left">

                {/* pass data in ReviewItem component and  */}
                {orderProducts.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    //  passing event handler 
                    removeItemFormReview={removeItemFormReview}
                ></ReviewItem>)}
            </div>

            <div className="cart">
                <Cart cartProducts={orderProducts}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;