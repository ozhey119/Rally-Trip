import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { links } from '../../links';
import './MobileMenu.css';


const MobileMenu = () => {
    const [subOptions, setSubOptions] = useState([]);
    const [mainOptions, setMainOptions] = useState();
    const [currentCategory, setCurrentCategory] = useState(); //The current category NAME.
    let history = useHistory();
    let location = useLocation();
    let { category, subcategory } = useParams();

    // This effect builds the category and subcategory lists based on the current url.
    useEffect(() => {
        setMainOptions(links.map(link => {
            if (location.pathname.includes(link.path)) {
                setSubOptions(link.routes.map((subLink) => {
                    return <option key={subLink.path} value={subLink.path}>{subLink.name}</option>
                }))
                setCurrentCategory(link.name);
            }
            return <option key={link.path} value={link.path}>{link.name}</option>
        }))
    }, [location.pathname])

    const goToPath = (path) => {
        history.push(path);
    }

    return (
        <section className='mobile-navigation'>
            <select value={location.pathname} onChange={(e) => goToPath(e.target.value)}>
                <option value="/products" disabled hidden>בחר קטגוריה</option>
                <option value={`/products/${category}/${subcategory}`} disabled hidden>{`${currentCategory}`}</option>
                {mainOptions}
            </select>
            { subOptions.length ?
                <select value={location.pathname} onChange={(e) => goToPath(e.target.value)}>
                    <option value={`/products/${category}`} disabled hidden>בחר תת קטגוריה</option>
                    {subOptions}
                </select> : <div></div>}
        </section>
    );
}

export default MobileMenu;
