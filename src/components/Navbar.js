import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-left">
               {new Date().toLocaleDateString()}
            </div>
            <div className="navbar-middle">
                <p>STOREMATE</p>
            </div>
            <div className="navbar-right">
                {}
               
            </div>
        </nav>
    );
};

export default Navbar;