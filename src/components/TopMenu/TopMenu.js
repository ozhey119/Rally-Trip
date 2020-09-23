import React from 'react';
import './TopMenu.css';

const TopMenu = ({children}) => {

    
    return (
        <nav>
            <ul className='top-menu'>
                {children}
            </ul>
        </nav>
    );
}

export default TopMenu;
