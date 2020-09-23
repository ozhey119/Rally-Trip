import React from 'react';
import './SideDrawer.css';
import logo from '../../images/logos/logoGlow.png';
import { NavLink } from 'react-router-dom';
import contactSVG from '../../icons/contact.svg';

const SideDrawer = ({ sideDrawerOpen, subLinks }) => {

    return (
        <nav className={sideDrawerOpen ? 'sidedrawer open' : 'sidedrawer'}>
            <img src={logo} alt='Rally Trip' className='logo' />
            <NavLink exact to="/" activeClassName="active" className='sidedrawer-item'> בית </NavLink>
            <NavLink to="/products" activeClassName="active" className='sidedrawer-item'>מוצרים</NavLink>
            <ul>
                {subLinks}
            </ul>
            <NavLink to="/rally-abroad" activeClassName="active" className='sidedrawer-item'>ראליים בחו"ל</NavLink>
            <NavLink to="/nav-guide" activeClassName="active" className='sidedrawer-item'>הדרכות ניווט</NavLink>
            <div className='seperating-line' />
            <div className='sidedrawer-item'>
                <img className='side-icon' src={contactSVG} alt="" />
                 התחבר
            </div>
        </nav>
    );
}

export default SideDrawer;
