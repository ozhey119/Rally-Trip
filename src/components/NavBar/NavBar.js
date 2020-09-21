import React from 'react';
import './NavBar.css';
import logo from '../../logo.png';
import logoMini from '../../logo-mini.png';


const NavBar = () => {

    return (
        <div id='navbar'>
            <img src={logoMini} alt='Rally Trip' id='logo-mini' />
            <ul className='nav-links right'>
                <li>בית</li>
                <li>סיפורי דרך</li>
                <li>ספרי דרך</li>
                <li>מדי מרחק</li>
            </ul>
            <img src={logo} alt='Rally Trip' id='logo' />
            <ul className='nav-links left'>
                <li>מכשירי GPS</li>
                <li>מצלמות אקסטרים</li>
                <li>ראליים בחו"ל</li>
                <li>הדרכות ניווט</li>
            </ul>
        </div>
    );
}

export default NavBar;
