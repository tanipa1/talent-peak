import React from 'react';
import './Header.css';
import img from '../../assets/All Images/man.png';

const Header = () => {
    return (
        <div className='header'>
            {/* Details */}
            <div className='header-details'>
                <h1>One Step <br/> Closer To Your <span className='dream'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            {/* Image */}
            <div className='h-img'>
                <img className='header-img' src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;