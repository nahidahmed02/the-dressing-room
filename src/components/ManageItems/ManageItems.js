import React from 'react';
import useItems from '../../hooks/useItems';
import ManageSingleItem from '../ManageSingleItem/ManageSingleItem';

const ManageItems = () => {
    const [items] = useItems()
    return (
        <div className='container'>
            <h2 className='headline text-center mt-4 mb-4 fw-bold'>Inventory of Our Items</h2>
            <div>
                {
                    items.map(item => <ManageSingleItem
                        key={item._id}
                        item={item}
                    ></ManageSingleItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;