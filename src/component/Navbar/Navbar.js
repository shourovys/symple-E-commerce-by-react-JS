import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { UserContext } from '../../App';
import { useAuth } from '../LogIn/UseAuth';

// creating navbar by this function
const Navbar = () => {

    const auth = useAuth()

    return (
        <div>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navBar">
                <ul className="nav-item-container">
                    <li className="nav-item"><a href="/product">Product</a></li>
                    <li className="nav-item"><a href="/OrderReview">Order Review</a></li>
                    <li className="nav-item"><a href="/UpComing">Up coming</a></li>
                </ul>
                <div className="userInfo">
                    {
                        auth.user && <img className=" user userImg" src={auth.user.img} />
                    }
                    {
                        auth.user ? <div className="user"><a href="/logIn">{auth.user.name}</a></div> : <a className="nav-item" href="/logIn">Sine In</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;