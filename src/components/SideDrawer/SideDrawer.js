import React from 'react';
import './SideDrawer.css';
import logo from '../../images/logos/logoGlow.png';
import { NavLink } from 'react-router-dom';
// import contactSVG from '../../icons/contact.svg';
import { links } from '../../links';
import TreeView from '../TreeView/TreeView'

let linkItems = links.map(link =>
    <li key={link.path}>
        <NavLink to={link.path} activeClassName='active' className='link-item'>
            {link.name}
        </NavLink>
    </li>)


const SideDrawer = ({ sideDrawerOpen }) => {

    return (
        <nav className={sideDrawerOpen ? 'sidedrawer open' : 'sidedrawer'}>
            <img src={logo} alt='Rally Trip' className='logo' />
            <NavLink exact to="/" activeClassName="active" className='sidedrawer-item'> בית </NavLink>
            <TreeView label = 'מוצרים' labelClass='sidedrawer-item'>
                {linkItems}
            </TreeView>
            <NavLink to="/rally-abroad" activeClassName="active" className='sidedrawer-item'>מרוצים בחו"ל</NavLink>
            <NavLink to="/nav-guide" activeClassName="active" className='sidedrawer-item'>הדרכות ניווט</NavLink>
            {/* <div className='seperating-line' /> */}
            {/* <div className='sidedrawer-item'>
                <img className='side-icon' src={contactSVG} alt="" />
                 התחבר
            </div> */}
        </nav>
    );
}

export default SideDrawer;
