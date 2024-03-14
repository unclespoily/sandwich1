import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sandwichHeaderLogo from '../resources/sandwichHeaderLogo.jpg';
import '../styles/main.sass';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navigation" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: '#f0f0f0' }}>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`} style={{ justifyContent: 'left' }}>
                <Link to="/" className="menu-item">Home Page</Link>
                <Link to="/Facilitator" className="menu-item">Facilitator Portal</Link>
                <Link to="/Join" className="menu-item">Join</Link>
                <Link to="/About" className="menu-item">About Us</Link>
                <Link to="/Contact" className="menu-item">Contact</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: '#f0f0f0' }}>
                <h2 style={{ marginRight: '2rem' }}>Is It A Sandwich?</h2>
                <Link to="/">
                    <img src={sandwichHeaderLogo} alt="Sandwich" style={{ width: 50, height: 50 }} />
                </Link>
            </div> 
        </div>
    );
};

export default Navigation;
