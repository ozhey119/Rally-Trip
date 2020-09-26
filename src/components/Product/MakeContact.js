import React from 'react';
import PhoneColor from '../../icons/PhoneColor.png';
import Copy from '../../icons/Copy.png';
import './MakeContact.css';

const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+972505562519").then(function () {
        alert('המספר הועתק')
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

const MakeContact = () => {

    return (
        <div className='phone'>
            <h2>לרכישה</h2>
            <div className='phone-grid'>
                <a href="tel:+972505562519" className='phone-button mobile'>
                    <span>לחץ להתקשר</span>
                    <img src={PhoneColor} alt="Phone" />
                </a>
                <div className='phone-button desktop' onClick={() => copyPhoneNumber()}>
                    <span>התקשר 050-5562-519</span>
                    <img src={PhoneColor} alt="Phone" />
                </div>
            </div>
        </div>
    );
}

export default MakeContact;
