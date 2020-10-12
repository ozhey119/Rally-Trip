import React from 'react';
import './BackDrop.css';


const BackDrop = ({ setWindowOpen }) => {
    if (setWindowOpen) {
        return (
            <div className='backdrop' onClick={() => setWindowOpen((prevState) => !prevState)} />
        );
    } else {
        return (
            <div className='backdrop' />
        );
    }

}

export default BackDrop;
