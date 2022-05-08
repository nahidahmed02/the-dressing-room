import React from 'react';
import './Banner.css'

// banner with a bg image
const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <p className='banner-description '>Get your kits from <br /> <span className='title-in-description'>'The Dressing Room'</span>,<br /> feel the comfort and make the day yours.</p>
        </div>
    );
};

export default Banner;