import React from 'react';
import './ShowProduct.css'
import { Link } from 'react-router-dom';

const ShowProduct = (props) => {

    // get all value form product
    const { name, price, seller, star, stock, img, features, key } = props.product;

    // show product info in DOM
    return (
        <div className="product-container">
            <div className="product-img-container"><img src={img} /></div>
            <div className="product-info-container">
                <h4 className="product-name" > <Link to={"/product/" + key}>{name}</Link> </h4>
                <div className="side">
                    <div className="right-side">
                        <h3>${price}</h3>
                        <p>by : {seller}</p>
                        <p>Only {stock} In stock, Order Now </p>
                        {/*before we using array function because function call him self when we passing the product && ( add event listener using props) */}
                        {props.showAddToCartBtn && <button onClick={() => props.handelAddToCart(props.product)} className="add-to-cart">Add To cart</button>}
                    </div>
                    <div className="left-side">
                        {/* make a condition for showing Features */}
                        {features.length != 0 && <h4>Features : </h4>}
                        {/* show object Key and Value in DOM using map function */}
                        {
                            features.map(element => {
                                if (features.length)
                                    return <p
                                        key={element.description}
                                        className='features'>{element.description} {element.value}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;

