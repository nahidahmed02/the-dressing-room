import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';


// showing the products of inventories and handle delete button
const ManageSingleItem = ({ item }) => {

    const { _id, name, description, price, quantity, supplier, photo } = item;

    const location = useLocation();
    const navigate = useNavigate();
    const navigateBtn = id => {
        navigate(`/inventory/${id}`);
    }

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://the-dressing-room-server.vercel.app/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className="card mb-5 Q-A">
            <div className="row g-0 p-4">
                <div className="col-md-4 my-auto">
                    <img src={photo} className="img-fluid rounded" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body ms-2">
                        <h5 className="card-title"><strong>Name:</strong> {name}</h5>
                        <p className="card-text"><strong>Description:</strong> {description}</p>
                        {
                            quantity > 0
                                ?
                                <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                                :
                                <p className="card-text"><strong>Status:</strong><span className='text-danger fw-bold fst-italic'> SOLD</span></p>
                        }
                        <p className="card-text"><strong>Supplier:</strong> {supplier}</p>
                        <p className="card-text"><strong>Price:</strong> {price}</p>
                        <button onClick={() => navigateBtn(_id)} className='btn btn-success'>Update</button>
                        {
                            location.pathname === '/inventory'
                                ?
                                <button onClick={() => handleDelete(item._id)} className='btn btn-danger ms-2'>Delete</button>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleItem;