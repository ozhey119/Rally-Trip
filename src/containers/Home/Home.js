import React from 'react';
import './Home.css';
import landingImage from '../../images/landing.jpg'

const Home = () => {

    return (
        <div id ='home'>
            <img className = 'landing-image' src={landingImage} alt='Rally' />
            ראלי טריפ. השער שלך לעולם הראלי רייד
        </div>
    );
}

export default Home;
