import React from 'react';
import { useParams } from 'react-router-dom';
import MakeContact from './MakeContact';
import booksInformation from '../../ProductsInformation.json'
import FacebookColor from '../../icons/FacebookColor.png';
import WhatsAppColor from '../../icons/WhatsAppColor.png';
import MailColor from '../../icons/MailColor.png';
import { Link } from 'react-router-dom';

import './Product.css';

const ProductPage = () => {
    let { id, category: categoryUrl } = useParams();
    if (!booksInformation[id - 1]) return <div>לא נמצא מוצר</div>;
    const {
        title = '',
        description = '',
        price = '',
        category, id: _, subcategory: __,
        ...restFields
    } = booksInformation[id - 1];

    let extraFields = Object.entries(restFields).map((field) => {
        if (Array.isArray(field[1])) {
            return (
                <React.Fragment key={field[0]}>
                    <h4>{mapKeyToHebrew(field[0].toString())}</h4>
                    <ul>
                        {field[1].map((subField, index) =>
                            <li key={index} className='data-field'>
                                {Object.entries(subField).map((sub) =>
                                    <span key={sub[0]}>{sub[1]}</span>
                                )}
                            </li>
                        )}
                    </ul>
                </React.Fragment>
            )
        } else {
            return (
                <div key={field[0]} className='data-field'>
                    <span>{mapKeyToHebrew(field[0].toString())}:</span>
                    <span>{field[1].toString()}</span>
                </div>
            )
        }
    })

    return (
        <article style={{ width: '100%' }}>
            <section style={{ paddingBottom: '10px' }}>
                <Link to={`/`}>בית</Link> &#x203A;
                <Link to={`/products`}> כל המוצרים</Link> &#x203A;
                <Link to={`/products/${categoryUrl}`}> {mapCategoryUrlToCategoryName(categoryUrl)} </Link> &#x203A;
                <span> {title}</span>
            </section>
            <div className='product-grid'>
                <div className='img-container'>
                    <img src={require(`../../images/products/${title}.png`)} alt='product' />
                </div>
                <div className='product-information'>
                    <h2>{title}</h2>
                    <div className='divider'></div>
                    <div className='price'>{price.length ? `₪${price}` : 'בקרוב..'}</div>
                    <h4>{description}</h4>
                    <MakeContact />
                    <div className='icons'>
                        <a href="https://wa.me/972505562519"><img src={WhatsAppColor} alt="WhatsApp" /></a>
                        <a href="https://www.facebook.com/RallyTrip"><img src={FacebookColor} alt="Facebook" /></a>
                        <a href="mailto:119raz@walla.com"><img src={MailColor} alt="Mail" /></a>
                    </div>
                </div>
                <div className='grid-bottom'>
                    <div >פרטים נוספים</div>
                    <div>{extraFields}</div>
                </div>
            </div>
        </article >
    );
}

function mapCategoryUrlToCategoryName(categoryUrl) {
    switch (categoryUrl) {
        case 'roadbooks':
            return 'סיפורי דרך'
        case 'roadbook-holders':
            return 'ספרי דרך'
        case 'gopro':
            return 'מצלמות גופרו'
        case 'icos':
            return 'מדי מרחק'
        case 'garmin':
            return 'גרמין'
        default:
            return ''
    }
}

function mapKeyToHebrew(key) {
    switch (key) {
        case 'starting_point':
            return 'נקודת זינוק'
        case 'ending_point':
            return 'נקודת סיום'
        case 'length':
            return 'אורך המסלול'
        case 'row_number':
            return 'מספר שורות'
        case 'gas_station':
            return 'תחנות דלק'
        case 'updates':
            return 'עדכונים'
        default:
            return '';
    }
}


export default ProductPage;
