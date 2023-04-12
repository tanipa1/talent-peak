import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 pl-[250px] pr-[200px] mx-auto bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li tabIndex={0}>
                                <NavLink className="justify-between">
                                    Applied Jobs
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </NavLink>
                            </li>
                            <li><NavLink>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case font-bold text-3xl"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><circle cx="24" cy="22" r="20" fill="#FFF59D"/><path fill="#FBC02D" d="M37 22c0-7.7-6.6-13.8-14.5-12.9c-6 .7-10.8 5.5-11.4 11.5c-.5 4.6 1.4 8.7 4.6 11.3c1.4 1.2 2.3 2.9 2.3 4.8v.3h12v-.1c0-1.8.8-3.6 2.2-4.8c2.9-2.4 4.8-6 4.8-10.1z"/><path fill="#FFF59D" d="m30.6 20.2l-3-2c-.3-.2-.8-.2-1.1 0L24 19.8l-2.4-1.6c-.3-.2-.8-.2-1.1 0l-3 2c-.2.2-.4.4-.4.7s0 .6.2.8l3.8 4.7V37h2V26c0-.2-.1-.4-.2-.6l-3.3-4.1l1.5-1l2.4 1.6c.3.2.8.2 1.1 0l2.4-1.6l1.5 1l-3.3 4.1c-.1.2-.2.4-.2.6v11h2V26.4l3.8-4.7c.2-.2.3-.5.2-.8s-.2-.6-.4-.7z"/><circle cx="24" cy="44" r="3" fill="#5C6BC0"/><path fill="#9FA8DA" d="M26 45h-4c-2.2 0-4-1.8-4-4v-5h12v5c0 2.2-1.8 4-4 4z"/><path fill="#5C6BC0" d="m30 41l-11.6 1.6c.3.7.9 1.4 1.6 1.8l9.4-1.3c.4-.6.6-1.3.6-2.1zm-12-2.3v2L30 39v-2z"/></svg>  <span className='talent'>Talent</span>Peak</Link>
                </div>
                <div className="navber navbar-center hidden lg:flex text-gray-400 d-none d-md-flex">
                    <NavLink className="navMiddleText" activeClassName="active" to="/">Home</NavLink>
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/statistics" className='navMiddleText'>Statistics</NavLink></li>
                        
                        <li tabIndex={0}>
                            <NavLink to="/appliedjob" className='navMiddleText'>Applied Jobs</NavLink>
                        </li>
                        <li><NavLink className='navMiddleText' to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn nav-btn">Start Applying</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;