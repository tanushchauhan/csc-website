import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="options-box">
                <span className="navOption">
                    <Link className="link" to="/events"><h2>Events</h2></Link>
                </span>
                <span className="navOption">
                    <Link className="link" to="/chapters"><h2>Chapters</h2></Link>
                </span>
                <span className="navOption">
                    <Link className="link" to="/about"><h2>About</h2></Link>
                </span>
                <span className="navOption">
                    <Link className="link" to="/"><h2>Home</h2></Link>
                </span>
            </div>
            <div className="contact-box">
                <span className="navOption contact-button">
                    <Link className="link" to="/contact-us"><h2>Contact Us</h2></Link>
                </span>
            </div>

        </div>
    )
};

export default Navbar;