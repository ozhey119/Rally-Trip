import React, { useState, useEffect } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import logo from '../../images/logos/logoGlow.png';
import './NavBar.css';


const NavBar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    let location = useLocation();
    let backdrop, dropdown;

    if (sideDrawerOpen) {
        backdrop = <BackDrop setWindowOpen={setSideDrawerOpen} />
    }

    if (showDropdown) {
        dropdown = <Dropdown />
    }

    // Close the side drawer everytime the url changes
    useEffect(() => {
        setSideDrawerOpen(false);
    }, [location]);

    return (
        <>
            <SideDrawer sideDrawerOpen={sideDrawerOpen} />
            {backdrop}
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
                    <li><NavLink to="/rally-abroad" activeClassName="nav-active">מרוצים בחו"ל</NavLink></li>
                    <li><NavLink to="/nav-guide" activeClassName="nav-active">הדרכות ניווט</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
