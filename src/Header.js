import React from 'react';
import logo from './assets/images/melwood.svg';
import menu from './assets/images/menu.svg';
import './css/Header.css';

function Header() {
    return (
        <div className="Wrapper">
            <div className="Header">
                <img src={logo} className="Logo" alt="logo" />
                <div className="Center">Made up Website</div>
                <img src={menu} className="Menu" alt="menu" />
            </div>
        </div>
    )
}

export default Header;
