import React from 'react';
import MakeContact from './MakeContact';
import Breadcrumbs from './Breadcrumbs'
import FacebookColor from '../../icons/FacebookColor.png';
import WhatsAppColor from '../../icons/WhatsAppColor.png';
import MailColor from '../../icons/MailColor.png';


import './Product.css';

const ProductPage = ({ product = {} }) => {
    const { title = '', description = '', price = '', extra = {}} = product;
    let extraFields;
        extraFields = Object.entries(extra).map((field) => {
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
            <Breadcrumbs title={title} />
            <div className='product-grid'>
                <div className='img-container'>
                    {title ? <img src={require(`../../images/products/${title}.png`)} alt='product' /> : ''}
                </div>
                <div className='product-information'>
                    <h2>{title}</h2>
                    <div className='divider'></div>
                    <div className='price'>{price ? `₪${price}` : 'בקרוב..'}</div>
                    <h4>{description}</h4>
                    <MakeContact />
                    <div className='icons'>
                        <a href="https://wa.me/972505562519"><img src={WhatsAppColor} alt="WhatsApp" /></a>
                        <a href="https://www.facebook.com/RallyTrip"><img src={FacebookColor} alt="Facebook" /></a>
                        <a href="mailto:119raz@walla.com"><img src={MailColor} alt="Mail" /></a>
                    </div>
                </div>
                <div className='grid-bottom'>
                    {extraFields.length ? <div>פרטים נוספים</div> : ''}
                    <div>{extraFields}</div>
                </div>
            </div>
        </article >
    );
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
