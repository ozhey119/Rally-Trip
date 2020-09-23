import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../images/logos/logoGlow.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = ({ setSideDrawerOpen, subLinks }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    let dropdown;
    if (showDropdown) {
        dropdown =
            <ul className='dropdown'>
                {subLinks}
            </ul>
    }

    return (
        <div id='navbar'>
            <button className='hamburger' onClick={() => setSideDrawerOpen((prevState) => !prevState)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            <ul className='nav-links'>
                <li><NavLink exact to="/" activeClassName="nav-active">בית</NavLink></li>
                <li onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <NavLink to="/products" activeClassName="nav-active" >
                        מוצרים
                    </NavLink>
                    {dropdown}
                </li>
            </ul>
            <Link to='/'>
                <img src={logo} alt='Rally Trip' className='logo' />
            </Link>
            <ul className='nav-links'>
                <li><NavLink to="/rally-abroad" activeClassName="nav-active">ראליים בחו"ל</NavLink></li>
                <li><NavLink to="/nav-guide" activeClassName="nav-active">הדרכות ניווט</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;
