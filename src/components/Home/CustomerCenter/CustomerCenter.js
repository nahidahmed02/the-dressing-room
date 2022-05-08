import React from 'react';
import './CustomerCenter.css'

// to know customers feedback
const CustomerCenter = () => {
    // to fuction the form
    const handleReview = event => {
        event.preventDefault();
        event.target.reset();
    }
    return (
        <div className='container'>
            <h2 className='text-center headline mt-4 fw-bold'>Customer Center</h2>
            <div className='review d-flex mt-4 Q-A'>
                <div className='review-text'>
                    <h5 className='px-5 mt-5'>We care for our customers. It is very important for us to know the thought of our customers about our products. So if you have any say about our products, then write it on the description box and send it to us. <br /><br /> Thank you!</h5>
                </div>
                <div className='review-field my-3'>
                    <form onSubmit={handleReview}>
                        <input type="text" name="name" placeholder='Your Name' />
                        <br />
                        <textarea className='mt-2' cols="30" rows="5" name='description' placeholder='Your opinion'></textarea>
                        <br />
                        <input className='btn btn-success' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerCenter;