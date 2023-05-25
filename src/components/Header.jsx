import React from 'react';
import logo from '../img/logo.svg';

function Header() {
    return (
        <header className="container header">
            <img src={logo} className="header--logo" alt="globe" />
            <h1 className="header--text">my travel journal.</h1>
        </header>
    )
}

export default Header;