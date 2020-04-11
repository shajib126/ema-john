import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className = "header_logo">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order now</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;