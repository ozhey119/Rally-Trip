import React from 'react';
import Slider from '../Slider/Slider';
import './Book.css';

const Book = ({ bookInfo = {}, images = [] }) => {
    const {
        header = '',
        description = '',
        length = '',
        row_number = '',
        starting_point = '',
        ending_point = '',
        updates = '',
        gas_station = ''
    } = bookInfo;

    const updatesList = updates.map((update, index) =>
        <li key={index}>
            <span>{update.date}:</span>
            <span>{update.content}</span>
        </li>);

    let updatesField;
    
    const imageList = images.map((image, index) => <img src={image} alt='pic' key={index} />)
    if (updates.length)
        updatesField = <>
            <div style={{ fontWeight: '600', textDecorationLine: 'underline', padding: "5px" }}>עדכונים</div>
            <ul className='updates'>{updatesList}</ul>
        </>

    return (
        <article className='book'>
            <Slider>
                {imageList}
            </Slider>
            <h2>
                {header}
            </h2>
            <h4 style={{ padding: '10px 20px' }}>
                {description}
            </h4>
            <div>
                <span>{'נקודת זינוק:'}</span>
                <span>{starting_point}</span>
            </div>
            <div>
                <span>{'נקודת סיום:'}</span>
                <span>{ending_point}</span>
            </div>
            <div>
                <span>{'אורך המסלול:'}</span>
                <span>{length}</span>
            </div>
            <div>
                <span>{'שורות:'}</span>
                <span>{row_number}</span>
            </div>
            <div>
                <span>{'תחנת דלק:'}</span>
                <span>{gas_station}</span>
            </div>
            {updatesField}
        </article>
    );
}

export default Book;

