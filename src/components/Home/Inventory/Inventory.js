import React from 'react';
import useItems from '../../../hooks/useItems';
import ManageSingleItem from '../../ManageSingleItem/ManageSingleItem';
import { Link } from 'react-router-dom';


// will show 6 items in the home page
const Inventory = () => {
    const [items] = useItems();

    return (
        <div className='container'>
            <h2 className='headline text-center mt-5 mb-4 fw-bold'>Inventory</h2>

            {/* loading spinner will disappear as the 6 items appear */}
            {
                items.length < 6
                    ?
                    <div className='text-center mb-3'>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    ''
            }
            <div>
                {
                    items.slice(0, 6).map(item => <ManageSingleItem
                        key={item._id}
                        item={item}
                    ></ManageSingleItem>)
                }
            </div>
            <div className='text-center mb-5'>
                <Link to={'/inventory'}>
                    <button className='btn btn-info btn-lg px-5'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;