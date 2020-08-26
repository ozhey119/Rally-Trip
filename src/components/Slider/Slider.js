import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ children = [], ...props }) => {
    const [counter, setCounter] = useState(0);
    let dots;

    dots = children.map((image, index) => <div key={index} className={`dot ${counter === index && 'active'}`}></div>)

    const handleClick = (action) => {
        if (action === 'increment' && counter < children.length - 1)
            setCounter(counter + 1);
        else if (action === 'decrement' && counter > 0)
            setCounter(counter - 1);
    }

    return (
        <article className='slider-container' style={{ width: props.width || '100%' }} {...props}>
            <div className='image-container' style={{ transform: `translateX(-${counter * 100}%)` }}>
                {children}
            </div>
            <div className='arrow prev' onClick={() => handleClick('decrement')} >&#10094;</div>
            <div className='arrow next' onClick={() => handleClick('increment')} >&#10095;</div>
            <div className='dots' >{dots}</div>
        </article>
    );
}

export default Slider;
