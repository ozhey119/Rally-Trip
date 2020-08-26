import React from 'react';
import './Footer.css';
import Facebook from '../../icons/Facebook.png';
import WhatsApp from '../../icons/WhatsApp.png';


const Footer = () => {

    return (
        <section className='footer'>
            <div className='icons-container'>
                <div >רז הימן -  119raz@walla.com</div>
                <div>
                    <a href="https://wa.me/972505562519"><img src={WhatsApp} alt="WhatsApp" className='icon' /></a>
                    <a href="https://www.facebook.com/RallyTrip"><img src={Facebook} alt="Facebook" className='icon' /></a>
                </div>
                <div >© כל הזכויות שמורות לRally Trip</div>

            </div>
        </section>
    );
}

export default Footer;
