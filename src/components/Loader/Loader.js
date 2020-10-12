import React from 'react';
import Backdrop from '../BackDrop/BackDrop';
import './Loader.css';


const Loader = ({ fullscreen }) => {
    if (fullscreen) {
        return (
            <>
                <div className='loader fullscreen' > </div>
                <Backdrop />
            </>
        );
    } else {
        return (
            <div className='loader' />
        );
    }

}

export default Loader;
