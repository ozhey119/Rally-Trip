import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductPreview = ({ product, id }) => {

    return (
        <Link to={`/products/${product.category}/${product.subcategory}/${id}`} >
            <article className='preview-container'>
                <div className='preview-top'>
                    <img className='preview-img' src={product.image} alt='product' />
                </div>
                <div className='preview-bot'>
                    <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{product.title}</div>
                    <div className='divider'></div>
                    <div>{parseInt(product.price) ? `₪${product.price}` : 'צור קשר לקבלת מחיר'}</div>
                    <button className='btn'>לפרטים נוספים</button>
                </div>
            </article>
        </Link>
    );
}

export default ProductPreview;
