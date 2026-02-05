import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
    const location = useLocation();

    return (
        <div className="mobile-bottom-nav">
            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
            <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <i className="fa-solid fa-user-group"></i>
                <span>About</span>
            </Link>
            <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <i className="fa-solid fa-envelope"></i>
                <span>Contact</span>
            </Link>
            <a href="#proposal" className="nav-item proposal-btn">
                <i className="fa-solid fa-paper-plane"></i>
                <span>Proposal</span>
            </a>
        </div>
    );
};

export default MobileBottomNav;
