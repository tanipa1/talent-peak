import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h1 className='logo'>TalentPeak</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/apply">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='Apply-btn'>Start Applying</button>
        </nav>
    );
};

export default Nav;