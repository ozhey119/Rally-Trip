import React from 'react';
import './SideMenu.css';

const SideMenu = ({children}) => {

    
    return (
        <nav className = 'sidemenu-container'>
            <h3>סינון</h3>
            <ul className='sidemenu-list'>
                {children}
            </ul>
        </nav>
    );
}

export default SideMenu;
