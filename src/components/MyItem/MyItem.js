import React from 'react';
import useItems from '../../hooks/useItems';

const MyItem = ({ myItem }) => {
    const { _id, name, description, price, quantity, supplier, photo } = myItem;

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('dalete');
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
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
                        <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
                        <p className="card-text"><strong>Supplier:</strong> {supplier}</p>
                        <p className="card-text"><strong>Price:</strong> {price}</p>
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;