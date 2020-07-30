import React, { useState, useEffect } from 'react';
import './OrderReview.css'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../LogIn/UseAuth';

const OrderReview = () => {
    // in this useState i store OrderProduct those take form localStorage by useEffect
    const [orderProducts, setOrderProducts] = useState([]);
    // when user place order i use this state for show gif
    const [OrderPlace, setOrderPlace] = useState(false)

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

    // handelOrderPlace() clear localstorage and clear state
    const handelOrderPlace = () => {
        processOrder()
        setOrderProducts([])

    }

    let happy;
    if (OrderPlace) {
        happy = <img src={happyImage} />
    }

    const auth = useAuth;

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
                {happy}
            </div>

            <div className="cart">
                <Cart cartProducts={orderProducts}>
                    {
                        <Link to="/ShipMent">
                            <button
                                style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: '55%',
                                    textDecoration: 'none'

                                }}
                                className="add-to-cart">Order Place</button></Link>
                    }
                </Cart>
            </div >
        </div >
    );
};

export default OrderReview;