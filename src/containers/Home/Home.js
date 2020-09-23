import React from 'react';
import './Home.css';
import landingImage from '../../images/landing.jpg'

const Home = () => {

    return (
        <div className ='page-container'>
            <img className = 'landing-image' src={landingImage} alt='Rally' />
        </div>
    );
}

export default Home;
