import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductPreview = ({ item }) => {

    return (
        <Link to={`/products/${item.category}/${item.id}`} >
            <article className='preview-container'>
                <img className='preview-img' src={require(`../../images/roadbooks/${item.title}.png`)} alt='product' />
                <div>{item.title}</div>
                <div className='divider'></div>
                <div style={{ fontWeight: 'bold' }}>₪{item.price}</div>
            </article>
        </Link>
    );
}

export default ProductPreview;
