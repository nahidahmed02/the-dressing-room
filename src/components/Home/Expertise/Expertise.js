import React from 'react';
import './Expertise.css'
import expert from '../../../images/expert.jpg'

// describing the expertise of 'The Dressing Room'
const Expertise = () => {
    return (
        <div className='container mb-5'>
            <h2 className='text-center headline mt-4 fw-bold'>Our Expertise</h2>
            <div className='d-flex mt-4 expertise Q-A'>
                <div className='expertise-point mx-auto my-auto'>
                    <h5>* Over 1 Decades of Expertise</h5>
                    <h5>* 1 Million+ Visitors</h5>
                    <h5>* 1.5 Million Page Views</h5>
                    <h5>* 55% Decision Makers</h5>
                    <h5>* 65,000+ Registered Members</h5>
                    <h5>* 150,000+ Social Media Followers</h5>
                </div>
                <div className='ms-auto'>
                    <img src={expert} className='rounded' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Expertise;