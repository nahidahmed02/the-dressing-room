import React from 'react';
import { useLocation } from 'react-router-dom';
import './ManageSingleItem.css'

const ManageSingleItem = ({ item }) => {
    const location = useLocation();
    const { name, description, price, quantity, supplier, photo } = item;
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
                        <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
                        <p className="card-text"><strong>Supplier:</strong> {supplier}</p>
                        <p className="card-text"><strong>Price:</strong> {price}</p>
                        {
                            location.pathname === '/manageitems'
                                ?
                                <button className='btn btn-danger'>Delete</button>
                                :
                                <button className='btn btn-success'>Update</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleItem;