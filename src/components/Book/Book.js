import React from 'react';
import Slider from '../Slider/Slider';
import './Book.css';

const Book = ({ bookInfo = {}, images = [] }) => {
    const { header = '', description = '', length = '', difficulty = '', updates = '' } = bookInfo;
    const updatesList = updates.map((update, index) =>
        <li key={index} >
            <span>{update.date}:</span>
            <span>{update.content}</span>
        </li>);
    const imageList = images.map((image, index) => <img src={image} alt='pic' key={index} />)
    return (
        <article className='book'>
            <Slider>
                {imageList}
            </Slider>
            <h2>
                {header}
            </h2>
            <h4 style={{ padding: '10px' }}>
                {description}
            </h4>
            <div>
                <span>{'אורך המסלול:'}</span>
                <span>{length}</span>
            </div>
            <div>
                <span>{'קושי:'}</span>
                <span>{difficulty}</span>
            </div>
            <div style={{ textDecorationLine: 'underline' }}>{'עדכונים'}</div>
            <ul className='updates'>{updatesList}</ul>
        </article>
    );
}

export default Book;

