import React from 'react';


const AddItem = () => {
    const img = 'https://i.ibb.co/NZL3TdP/random.png';
    return (
        <div className='container'>
            <h2 className='headline text-center mt-4 mb-4 fw-bold'>Add Item to The Inventory</h2>
            <form className='text-center'>
                <input type="text" name='name' placeholder='Item Name' className='mb-2 w-50' required />
                <br />
                <textarea type="text" name='description' placeholder='Description' className='mb-2 w-50' required />
                <br />
                <input type="number" name='price' placeholder='Price' className='mb-2 w-50' required />
                <br />
                <input type="number" name='quantity' placeholder='Quantity' className='mb-2 w-50' required />
                <br />
                <input type="text" name='supplier' placeholder='Supplier' className='mb-2 w-50' required />
                <br />
                <input type="text" value={img} className='mb-2 w-50' readOnly />
                <br />
                <input type="submit" value="Add" className='btn btn-info px-5 mt-2 form-btn' />
            </form>
        </div>
    );
};

export default AddItem;