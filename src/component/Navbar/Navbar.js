import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'

// creating navbar by this function
const Navbar = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} />
            </div>
            <ul className="nav-item-container">
                <li className="nav-item"><a href="/product">Product</a></li>
                <li className="nav-item"><a href="/OrderReview">Order Review</a></li>
                <li className="nav-item"><a href="/UpComing">Up coming</a></li>

            </ul>
        </div>
    );
};

export default Navbar;