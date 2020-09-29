import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { links } from '../../links';
import './SideMenu.css';

const SideMenu = () => {
    const [linkItems, setlinkItems] = useState([]);
    let location = useLocation();

    // This effect builds the category and subcategory lists based on the current url.
    useEffect(() => {
        setlinkItems(links.map(link => {
            let subLinks;
            if (location.pathname.includes(link.path)) {
                subLinks = link.routes.map((subLink) =>
                    <li key={subLink.path}>
                        <NavLink to={subLink.path} activeClassName='active' className='subitem'>- {subLink.name}</NavLink>
                    </li>
                )
            }
            return <React.Fragment key={link.path}>
                <li >
                    <NavLink to={link.path} activeClassName='active'>{link.name}</NavLink>
                </li>
                {subLinks}
            </React.Fragment>
        }))
    }, [location.pathname])

    return (
        <nav className='sidemenu-container'>
            <h3>סינון</h3>
            <ul className='sidemenu-list'>
                {linkItems}
            </ul>
        </nav>
    );
}

export default SideMenu;
