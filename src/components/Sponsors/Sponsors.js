import React from 'react';
import './Sponsors.css'
import Kookaburra from '../../images/sponsors/Kookaburra .png'
import ebay from '../../images/sponsors/ebay.jpg'
import CA from '../../images/sponsors/CA.jpg'
import masuri from '../../images/sponsors/masuri.webp'
import newbalance from '../../images/sponsors/new-balance.jpg'
import ss from '../../images/sponsors/SS.jpg'

// company that sponsored 'The Dressing Room'
const Sponsors = () => {
    return (
        <div className='container'>
            <h2 className='text-center headline mt-4 fw-bold'>Our Respectful <span className='text-danger fst-italic'>Sponsors</span></h2>
            <div className='text-center'>
                <img style={{ width: '10%', marginRight: '30px' }} src={Kookaburra} alt="" />
                <img style={{ width: '10%', marginRight: '30px' }} src={ebay} alt="" />
                <img style={{ width: '10%', marginRight: '30px' }} src={CA} alt="" />
                <img style={{ width: '10%', marginRight: '30px' }} src={masuri} alt="" />
                <img style={{ width: '10%', marginRight: '30px' }} src={newbalance} alt="" />
                <img style={{ width: '10%', marginRight: '30px' }} src={ss} alt="" />
            </div>
        </div>
    );
};

export default Sponsors;