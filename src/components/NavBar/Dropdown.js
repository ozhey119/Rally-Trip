import React from 'react';
import DropdownItem from './DropdownItem'
import { links } from '../../links';
import './Dropdown.css';

const linkItems = links.map(link => <DropdownItem key={link.path} path={link.path} label={link.name} routes={link.routes} />)

const Dropdown = () => {

    return (
        <ul className='dropdown'>
            {linkItems}
        </ul>
    );
}

export default Dropdown;
