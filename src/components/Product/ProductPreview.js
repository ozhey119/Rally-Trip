import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductPreview = ({ item }) => {

    return (
        <Link to={`/products/${item.category}/${item.id}`} >
            <article className='preview-container'>
                <div className='preview-top'>
                    <img className='preview-img' src={require(`../../images/roadbooks/${item.title}.png`)} alt='product' />
                </div>
                <div className='preview-bot'>
                    <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                    <div className='divider'></div>
                    <div>₪{item.price}</div>
                    <button class = 'btn'>לפרטים נוספים</button>
                </div>
            </article>
        </Link>
    );
}

export default ProductPreview;
