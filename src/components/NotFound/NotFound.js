import React from 'react';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='container text-center'>
            <img style={{ width: '45%' }} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;