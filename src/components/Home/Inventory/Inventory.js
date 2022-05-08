import React from 'react';
import useItems from '../../../hooks/useItems';


// will show 6 items in the home page
const Inventory = () => {
    const [items] = useItems();
    return (
        <div>
            <h2 className='headline text-center mt-5 mb-4 fw-bold'>Inventory</h2>
            <div></div>
        </div>
    );
};

export default Inventory;