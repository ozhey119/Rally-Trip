import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dropdown.css';


const DropdownItem = ({ path, label, routes }) => {
    const [viewSubMenu, setViewSubMenu] = useState(false);
    let linkItems = routes.map(link =>
        <li>
            <NavLink key={link.path} to={link.path} activeClassName='active'>
                {link.name}
            </NavLink>
        </li>)

    return (
        <li onMouseEnter={() => setViewSubMenu(true)} onMouseLeave={() => setViewSubMenu(false)}>
            <NavLink to={path} activeClassName='active' >{label}</NavLink>
            <ul className='submenu'>
                {viewSubMenu ? linkItems : ''}
            </ul>
        </li>
    );
}

export default DropdownItem;
