
import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className="custom-navbar" style={{display:"flex",justifyContent:"end",alignItems:"end"}}>
            <ul className="custom-nav-list">
                <li className="custom-nav-item"><a href="/" className="custom-nav-link">Home</a></li>
                <li className="custom-nav-item"><a href="/book" className="custom-nav-link">Book</a></li>
                <li className="custom-nav-item"><a href="/login" className="custom-nav-link">Login</a></li>
                <li className="custom-nav-item"><a href="/contact" className="custom-nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
