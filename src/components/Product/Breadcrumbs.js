import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { links } from '../../links';
import './Product.css';

const Breadcrumbs = ({ title }) => {
    const { category, subcategory } = useParams();
    let currentPath, categoryName, subcategoryName;
    currentPath = links.filter((link) => link.path.includes(category))[0] // match the current category
    categoryName = currentPath.name; // put the current category in categoryName
    // check if there's a subcategory that fits.
    currentPath.routes.forEach((link) => {
        if (link && link.path) {
            let subcategoryPath = link.path.slice(link.path.lastIndexOf('/'));
            if (subcategoryPath.includes(subcategory)) {
                subcategoryName = link.name;
            }
        }
    })

    return (
        <section className='breadcrumbs'>
            <Link to={`/`}>בית</Link> &#x203A;
            <Link to={`/products`}> כל המוצרים</Link> &#x203A;
            <Link to={`/products/${category}`}> {categoryName} </Link> &#x203A;
            {subcategoryName ? <><Link to={`/products/${category}/${subcategory}`}> {subcategoryName} </Link> &#x203A;</> : ''}
            <span> {title}</span>
        </section>
    );
}

export default Breadcrumbs;
