import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';

// showing item details and manage delivered and restock button
const ItemDetail = () => {
    const { id } = useParams();
    const [item] = useItem(id);

    const handleDelivered = event => {
        event.preventDefault();

        const quantity = parseInt(item.quantity) - 1;
        if (quantity >= 0) {
            const updatedQuantity = { quantity };

            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedQuantity),
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
        else {
            return
        }
    }
    const handleRestock = event => {
        event.preventDefault();


        const inputValue = parseInt(event.target.quantity.value);
        if (inputValue >= 0) {
            const quantity = parseInt(item.quantity) + inputValue;
            const updatedQuantity = { quantity };


            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedQuantity),
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })

            event.target.reset();
        }
        else {
            return alert('Please put a positive number')
        }
    }

    return (
        <div className='container'>
            <h2 className='headline text-center mt-4 mb-4 fw-bold'>Deliver and Restock - <span className='text-danger fst-italic'>{item.name}</span></h2>
            <div className='row mx-auto'>
                <div className='p-4 col-md-6'>
                    <div className="deliver-section card mb-4 p-4 Q-A">
                        <div>
                            <img src={item.photo} className="rounded" style={{ width: '100%' }} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text"><strong>ID:</strong> {item._id}</p>
                            <h5 className="card-title"><strong>Name:</strong> {item.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {item.description}</p>
                            {
                                item.quantity > 0
                                    ?
                                    <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                                    :
                                    <p className="card-text"><strong>Status:</strong><span className='text-danger fw-bold fst-italic'> SOLD</span></p>
                            }
                            <p className="card-text"><strong>Supplier:</strong> {item.supplier}</p>
                            <p className="card-text"><strong>Price:</strong> {item.price}</p>
                            <button onClick={handleDelivered} className='btn btn-warning'>Delivered</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 p-4 h-100'>
                    <div className='restock-section card'>
                        <h3 className='text-center fw-bold text-light py-2 bg-success'>Restock the Item</h3>
                        <form onSubmit={handleRestock} className='text-center my-4'>
                            <input className='w-50' type="number" name='quantity' placeholder='Quantity' />
                            <input className='ms-2 rounded btn-primary' type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-center mb-5'>
                <Link to={'/inventory'}>
                    <button className='btn btn-info btn-lg px-5'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;