import React from 'react';
import { useParams } from 'react-router-dom';
import booksInformation from '../../ProductsInformation.json'
import { Link } from 'react-router-dom';
import './Product.css';

const ProductPage = () => {
    let { id, category: categoryUrl } = useParams();

    const {
        title = '',
        description = '',
        length = '',
        row_number = '',
        starting_point = '',
        ending_point = '',
        updates = [],
        gas_station = '',
        price = '',
    } = booksInformation[id - 1];

    const updatesList = updates.map((update, index) =>
        <li key={index}>
            <span>{update.date}:</span>
            <span>{update.content}</span>
        </li>);

    let updatesField;

    if (updates.length)
        updatesField = <>
            <div style={{ fontWeight: '600', textDecorationLine: 'underline', padding: "5px" }}>עדכונים</div>
            <ul className='updates'>{updatesList}</ul>
        </>

    return (
        <article >
            <Link to={`/`}>בית</Link> /
            <Link to={`/products`}> כל המוצרים</Link> /
            <Link to={`/products/${categoryUrl}`}> קטגוריה</Link>
            <div className='product-grid'>
                <div className='img-container'>
                    <img src={require(`../../images/roadbooks/${title}.png`)} alt='product' />
                </div>
                <div className='product-information'>
                    <h2>
                        {title}
                    </h2>
                    <h4>
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
                    <div>
                        <span>{'מחיר:'}</span>
                        <span>₪{price}</span>
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>לרכישה צור קשר עם רז: 050-556-2519</div>
        </article>
    );
}

export default ProductPage;
