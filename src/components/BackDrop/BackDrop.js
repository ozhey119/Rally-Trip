import React from 'react';
import './BackDrop.css';


const BackDrop = ({setWindowOpen}) => {
    return (
        <div className = 'backdrop' onClick = {() => setWindowOpen((prevState) => !prevState)}/>
    );
}

export default BackDrop;
