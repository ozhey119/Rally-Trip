import React, { useState } from 'react';
import Book from '../../components/Book/Book';
import BookMenu from '../../components/BookMenu/BookMenu';
import './Books.css';
import booksInformation from './booksInformation.json';
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

console.log(images)

const Books = () => {
    const [activeBook, setActiveBook] = useState(0);
    const bookNames = booksInformation.map(book => book.header);

    const imagesObject = {};
    images.forEach(image => {
        let num = image.substr(image.lastIndexOf('/')+1)[0];
        if (!imagesObject.hasOwnProperty(num))
            imagesObject[num] = [];
        imagesObject[num].push(image)
    });
    return (
        <div id='books'>
            <BookMenu setActiveBook={setActiveBook} bookNames={bookNames} activeBook={activeBook} />
            <Book bookInfo={booksInformation[activeBook]} activeBook={activeBook} images={imagesObject[activeBook+1]} />
        </div>
    );
}

export default Books;

function importAll(r) {
    return r.keys().map(r);
}

