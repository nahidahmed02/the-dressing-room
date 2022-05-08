import React from 'react';
import useItems from '../../../hooks/useItems';
import ManageSingleItem from '../../ManageSingleItem/ManageSingleItem';


// will show 6 items in the home page
const Inventory = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h2 className='headline text-center mt-5 mb-4 fw-bold'>Inventory</h2>
            <div>
                {
                    items.slice(0, 6).map(item => <ManageSingleItem
                        key={item._id}
                        item={item}
                    ></ManageSingleItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;