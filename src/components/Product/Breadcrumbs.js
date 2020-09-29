import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { links } from '../../links';
import './Product.css';

const Breadcrumbs = ({ title }) => {
    const { category, subcategory } = useParams();
    let currentPath, categoryName, subcategoryName;
    currentPath = links.filter((link) => link.path.includes(category))[0]
    categoryName = currentPath.name;
    currentPath = currentPath.routes.filter((link) => (link && link.path && link.path.includes(subcategory)));
    if (currentPath.length) {
        subcategoryName = currentPath[0].name;
    }

    return (
        <section className = 'breadcrumbs'>
            <Link to={`/`}>בית</Link> &#x203A;
            <Link to={`/products`}> כל המוצרים</Link> &#x203A;
            <Link to={`/products/${category}`}> {categoryName} </Link> &#x203A;
            {subcategoryName ? <><Link to={`/products/${category}/${subcategory}`}> {subcategoryName} </Link> &#x203A;</> : ''}
            <span> {title}</span>
        </section>
    );
}

export default Breadcrumbs;
