import React, { useState } from 'react';
import './MobileDropdown.css';


const MobileDropdown = ({ children }) => {
    const [viewMenu, setViewMenu] = useState(false);
    let classes;
    if (viewMenu === true)
        classes = { menu: 'mobile-dropdown change', items: 'mobile-menu menu-show' };
    else
        classes = { menu: 'mobile-dropdown', items: 'mobile-menu menu-hide' };

    return (
        <section className = 'mobile-navigation'>
            <div className={classes.menu} onClick={() => setViewMenu(!viewMenu)}>
                <div className="bar1"></div>
                <p className="bar2">תת קטגוריות</p>
                <div className="bar3"></div>
            </div>
            <ul className={classes.items}>
                {children}
            </ul>
        </section>
    );
}

export default MobileDropdown;
