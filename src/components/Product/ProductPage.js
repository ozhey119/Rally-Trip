import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import MakeContact from './MakeContact';
import Breadcrumbs from './Breadcrumbs';
import Loader from '../Loader/Loader';
import FacebookColor from '../../icons/FacebookColor.png';
import WhatsAppColor from '../../icons/WhatsAppColor.png';
import MailColor from '../../icons/MailColor.png';
import { fireDb } from "../../firebase";


import './Product.css';

const ProductPage = ({ product = {}, id }) => {
    const { title = '', description = '', price = '', stock = 0 } = product;
    const [quillData, setQuillData] = useState('');

    // After the current product id changes, we will change the fields accordingly
    useEffect(() => {
        fireDb.ref(`quill/${id}`).on('value', snapshot => {
            if (snapshot.val() != null) {
                setQuillData(snapshot.val())
            }
        })
    }, [id])

    if (Object.keys(product).length === 0 && product.constructor === Object) {
        return <Loader />
    } else {
        return (
            <article style={{ width: '100%' }}>
                <Breadcrumbs title={title} />
                <div className='product-grid'>
                    <div className='img-container'>
                        {title ? <img src={(product && product.image) ? product.image : ''} alt='product' /> : ''}
                    </div>
                    <div className='product-information'>
                        <h2>{title}</h2>
                        <div className='divider'></div>
                        <div className='price'>{parseInt(price) ? `₪${price}` : 'צור קשר לקבלת מחיר'}</div>
                        <h4>{description}</h4>
                        {parseInt(stock) ?
                            <div style={{ color: 'green' }}>&#9745; המוצר במלאי </div> :
                            <div style={{ color: 'red' }}>&#9746; המוצר לא קיים במלאי. צור קשר לבירור זמן אספקה. </div>}
                        <MakeContact />
                        <div className='icons'>
                            <a href="https://wa.me/972505562519"><img src={WhatsAppColor} alt="WhatsApp" /></a>
                            <a href="https://www.facebook.com/RallyTrip"><img src={FacebookColor} alt="Facebook" /></a>
                            <a href="mailto:119raz@walla.com"><img src={MailColor} alt="Mail" /></a>
                        </div>
                    </div>
                    <div className='grid-bottom'> {/*The length of blank quill data with rtl is 51 */}
                        {quillData.length > 51 ? <h3 style={{ padding: '12px 15px 0px' }}>פרטים נוספים</h3> : ''} 
                        <ReactQuill theme="bubble" value={quillData} readOnly />
                    </div>
                </div>
            </article >
        );
    }
}


export default ProductPage;
