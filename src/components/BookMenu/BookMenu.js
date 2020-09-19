import React from 'react';
import './BookMenu.css';

const BookMenu = ({ activeBook, setActiveBook, bookNames }) => {
    //The links array creates list items according to the books being passed to it.
    const links = bookNames.map((header, index) => {
        if (index === activeBook)
            return <li key={index} id='active' onClick={() => setActiveBook(index)}>{header}</li>
        else
            return <li key={index} onClick={() => setActiveBook(index)}>{header}</li>
    })
    return (
        <nav>
            <ul className='book-menu'>
                {links}
            </ul>
        </nav>
    );
}

export default BookMenu;
