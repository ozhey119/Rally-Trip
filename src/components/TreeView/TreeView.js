import React, { useState } from 'react';
import arrow from '../../icons/arrow.png'
import './TreeView.css';

const TreeView = ({ label, children, labelClass }) => {
    const [viewItems, setViewItems] = useState(false);

    return (
        <>
            <div className={labelClass} style ={{display: 'flex'}} onClick={() => setViewItems(prevState => !prevState)}>
                {label}
                <img src={arrow} alt='arrow' style = {{height:'100%', marginRight: 'auto'}} className={viewItems ? 'rotate-up' : 'rotate-down'} />
            </div>
            <ul className={viewItems ? 'show-tree' : 'hide-tree'}>
                {children}
            </ul>
        </>
    );
}

export default TreeView;
