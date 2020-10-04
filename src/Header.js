import React from 'react';
import logo from './assets/images/melwood.svg';
import './css/Header.css';

function Header() {
    return (
        <div className="Wrapper">
            <div className="Header">
                <img src={logo} className="Logo" alt="logo" />
                <div className="Center">Made up Website</div>
                <div className="Right" />
            </div>
        </div>
    )
}

export default Header;
