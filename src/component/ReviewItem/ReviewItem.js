import React from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import Cart from '../Cart/Cart';

const ReviewItem = (props) => {
    // destructuring the props
    const { name, seller, quantity, price, key } = props.product
    return (
        // heat i use all class those are use in ShowProduct component
        <div className="side">
            <div className="right-side">
                <h4>{name}</h4>
                <h3>${price}</h3>
                <p>by : {seller}</p>
                <p>quantity : {quantity}</p>
                <button onClick={() => props.removeItemFormReview(key)} className="add-to-cart removeItemBtn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;