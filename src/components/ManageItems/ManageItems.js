import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageSingleItem from '../ManageSingleItem/ManageSingleItem';

const ManageItems = () => {
    const navigate = useNavigate();
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
                <div className='text-center mb-5'>
                    <button onClick={() => navigate('/additem')} className='btn btn-info btn-lg px-5'>Add New Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;